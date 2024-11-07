# app/views.py

from rest_framework import viewsets, status ,generics
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from django.contrib.auth import authenticate, logout
from django.contrib.auth.models import User
from rest_framework.permissions import AllowAny , IsAuthenticated
from .models import Search, UserProfile,Hotel,Restaurant,HotelDetail,Booking
from .serializers import DestinationSerializer, HotelSerializer, RestaurantSerializer, TripSerializer, UserSerializer, UserProfileSerializer ,HotelDetailSerializer,BookingSerializer
from django.http import JsonResponse
from django.views.decorators.http import require_GET
import requests
from django.core.mail import send_mail


class TripViewSet(viewsets.ModelViewSet):
    queryset = Search.objects.all()
    serializer_class = TripSerializer

@api_view(['POST'])
@permission_classes([AllowAny])
def signup(request):
    user_serializer = UserSerializer(data=request.data)
    if user_serializer.is_valid():
        user = user_serializer.save()
        user_profile = UserProfile(
            user=user,
            username=request.data.get('username'),
            email=request.data.get('email'),
            phone_number=request.data.get('phone_number', ''),
            password=request.data.get('password')  # Not recommended
        )
        user_profile.save()
        return Response({'success': 'User registered successfully!'}, status=status.HTTP_201_CREATED)

    return Response(user_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
@permission_classes([AllowAny])
def login(request):
    username = request.data.get('username')
    password = request.data.get('password')

    user = authenticate(username=username, password=password)
    if user is not None:
        return Response({'success': 'Login successful!'}, status=status.HTTP_200_OK)
    return Response({'error': 'Invalid credentials.'}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def logout_view(request):
    logout(request)
    return Response({'success': 'Logout successful!'}, status=status.HTTP_200_OK)


@api_view(['GET'])
def location_suggestions(request):
    query = request.GET.get('query', '')
    suggestions = Search.objects.filter(city_name__icontains=query)[:15]
    results = [{'placeAddress': entry.city_name, 'latitude': entry.latitude, 'longitude': entry.longitude} for entry in suggestions]
    return Response({'suggestedLocations': results})


@require_GET
def restaurant_search(request):
    latitude = request.GET.get('latitude')
    longitude = request.GET.get('longitude')
    radius = "20000"  # Radius in meters

    if not latitude or not longitude:
        return JsonResponse({'error': 'Latitude and longitude are required'}, status=400)

    api_url = f"https://overpass-api.de/api/interpreter?data=[out:json];node[amenity=restaurant](around:{radius},{latitude},{longitude});out;"

    try:
        response = requests.get(api_url)
        response.raise_for_status()
        data = response.json()

        restaurants = [
            {
                'name': element.get('tags', {}).get('name', 'Unknown'),
                'address': ', '.join([
                    element.get('tags', {}).get('addr:street', ''),
                    element.get('tags', {}).get('addr:city', ''),
                    element.get('tags', {}).get('addr:postcode', '')
                ])
            }
            for element in data.get('elements', [])
            if any([
                element.get('tags', {}).get('addr:street'),
                element.get('tags', {}).get('addr:city'),
                element.get('tags', {}).get('addr:postcode')
            ])
        ]
        return JsonResponse({'restaurants': restaurants})

    except requests.RequestException as e:
        return JsonResponse({'error': str(e)}, status=500)

@api_view(['GET'])
def nearby_hotels(request):
    latitude = request.GET.get('latitude')
    longitude = request.GET.get('longitude')
    limit = request.GET.get('limit', 10)  # Set a default limit, you can adjust this as needed

    if not latitude or not longitude:
        return Response({"error": "Latitude and longitude are required."}, status=status.HTTP_400_BAD_REQUEST)

    access_token = 'pk.eyJ1IjoibWFoYXJzaGljaG92YXRpeWEiLCJhIjoiY20xZGFxeXg5Mm05MjJrc2NiaXR6dHFvaiJ9.Kfrz5pqkVeJofd-NCpdegg'  # Replace with your Mapbox access token
    url = f"https://api.mapbox.com/geocoding/v5/mapbox.places/hotel.json"
    params = {
        'proximity': f"{longitude},{latitude}",
        'access_token': access_token,
        'limit': limit  # Add the limit parameter
    }   
    response = requests.get(url, params=params)

    if response.status_code == 200:
        hotels_data = response.json()
        hotels_list = []

        if 'features' in hotels_data:
            for hotel in hotels_data['features']:
                name = hotel.get('place_name', 'N/A')
                coords = hotel['geometry']['coordinates']
                map_image_url = f"https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/{coords[0]},{coords[1]},14,0,0/300x200?access_token={access_token}"
                hotels_list.append({
                    'name': name,
                    'coordinates': coords,
                    'map_image_url': map_image_url
                })

        return Response({"hotels": hotels_list}, status=status.HTTP_200_OK)
    else:
        return Response({"error": response.text}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)




@api_view(['GET'])
def nearby_places(request):
    API_KEY = '5ae2e3f221c38a28845f05b639930ef34b853a9118092a3ba3bf1aaa'
    BASE_URL = 'https://api.opentripmap.com/0.1/en'
    latitude = request.GET.get('latitude')
    longitude = request.GET.get('longitude')
    radius = request.GET.get('radius', 500000)  # Default radius in meters
    limit = request.GET.get('limit', 50)  # Default limit

    if not latitude or not longitude:
        return Response({"error": "Latitude and longitude are required."}, status=status.HTTP_400_BAD_REQUEST)

    # Step 1: Get places near the specified location
    places_url = f"{BASE_URL}/places/radius?radius={radius}&lon={longitude}&lat={latitude}&limit={limit}&format=json&apikey={API_KEY}"
    try:
        places_response = requests.get(places_url)
        places_response.raise_for_status()
        places = places_response.json()

        places_with_images = []

        # Step 2: Get details for each place, including image information
        for place in places:
            xid = place['xid']
            details_url = f"{BASE_URL}/places/xid/{xid}?apikey={API_KEY}"
            details_response = requests.get(details_url)

            if details_response.ok:
                details = details_response.json()
                image_url = details.get('preview', {}).get('source')

                if image_url:
                    places_with_images.append({
                        'name': place.get('name', 'N/A'),
                        'distance': place.get('dist', 'N/A'),
                        'image_url': image_url
                    })

        return Response({"places": places_with_images}, status=status.HTTP_200_OK)

    except requests.RequestException as e:
        return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    

@api_view(['POST'])
def register_booking(request):
    serializer = BookingSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({'success': 'Booking created successfully!'}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class HotelViewSet(viewsets.ModelViewSet):
    queryset = Hotel.objects.all()
    serializer_class = HotelSerializer

class RestaurantViewSet(viewsets.ModelViewSet):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer

class HotelListCreateView(generics.ListCreateAPIView):
    queryset = HotelDetail.objects.all()
    serializer_class = HotelDetailSerializer

class HotelDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = HotelDetail.objects.all()
    serializer_class = HotelDetailSerializer

from rest_framework.response import Response
from rest_framework import status

class BookingCreateView(generics.CreateAPIView):
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer

    def create(self, request, *args, **kwargs):
        print("hello")
        print(request.data)
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['POST'])
def save_destination(request):
    serializer = DestinationSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({'message': 'Destination saved successfully!'}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)