# trips/serializers.py

from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Destination, Search, UserProfile,Hotel,Restaurant,HotelDetail,Booking

class TripSerializer(serializers.ModelSerializer):
    class Meta:
        model = Search
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User(**validated_data)
        user.set_password(validated_data['password'])
        user.save()
        return user

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ['username', 'email', 'phone_number', 'password']

    def create(self, validated_data):
        user = User(**validated_data)
        user.set_password(validated_data['password'])
        user.save()
        user_profile = UserProfile.objects.create(user=user, **validated_data)
        return user_profile



class HotelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hotel
        fields = ['id', 'image']  # Include any other fields if necessary

class RestaurantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Restaurant
        fields = ['id', 'image']  # Include any other fields if necessary


class HotelDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = HotelDetail
        fields = '__all__'  


class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = '__all__'


class DestinationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Destination
        fields = ['title', 'location', 'days', 'price', 'after_discount', 'rating', 'reviews']
