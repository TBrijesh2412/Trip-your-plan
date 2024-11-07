# app/urls.py

from django.conf import settings
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TripViewSet, save_destination, signup, login, logout_view,HotelViewSet,RestaurantViewSet,HotelListCreateView, HotelDetailView,BookingCreateView
from . import views
from django.conf.urls.static import static
router = DefaultRouter()
router.register(r'search', TripViewSet)
router.register(r'hotel', HotelViewSet)
router.register(r'restaurant', RestaurantViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('signup/', signup, name='signup'),
    path('login/', login, name='login'),
    path('logout/', logout_view, name='logout'),
    path('location-suggestions/', views.location_suggestions, name='location_suggestions'),
    path('restaurant-search/', views.restaurant_search, name = 'restaurant_search'),
    path('nearby-hotels/', views.nearby_hotels, name = 'nearby_hotels'),
    path('nearby-places/', views.nearby_places, name = 'nearby_places'),
    path('hotels/', HotelListCreateView.as_view(), name='hotel-list-create'),
    path('HotelsDetails/' , HotelDetailView.as_view(), name='hotel-detail'),
    path('register/', BookingCreateView.as_view(), name='booking-create'),
    path('save-destination/', save_destination, name='save-destination'),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
