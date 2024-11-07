# D:\travel-app\backend\trips\models.py

from django.db import models
from django.contrib.auth.models import User

class Search(models.Model):
    city_name = models.CharField(max_length=100)
    latitude = models.FloatField()
    longitude = models.FloatField()

    def __str__(self):
        return self.city_name

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    username = models.CharField(max_length=150, unique=True)
    email = models.EmailField(unique=True)
    phone_number = models.CharField(max_length=15, blank=True)
    password = models.CharField(max_length=128)  # Not recommended, use User model for password management

    def __str__(self):
        return self.username
    

class Hotel(models.Model):
    image = models.ImageField(upload_to='hotels/')

    def __str__(self):
        return f"Hotel Image {self.id}"

# Model for Restaurant images
class Restaurant(models.Model):
    image = models.ImageField(upload_to='restaurants/')

    def __str__(self):
        return f"Restaurant Image {self.id}"


class HotelDetail(models.Model):
    image = models.ImageField(upload_to='HotelDetails/' , null=True , blank=True)
    hotel_name = models.CharField(max_length=255)
    description = models.TextField()
    price_per_night = models.DecimalField(max_digits=10, decimal_places=2)
    location = models.CharField(max_length=200)
    room_availability = models.IntegerField()

    def __str__(self):
        return self.hotel_name
    

class Booking(models.Model):
    class Booking(models.Model):
        name = models.CharField(max_length=100)
        email = models.EmailField()
        phone = models.CharField(max_length=10)
        check_in_date = models.DateField()
        check_out_date = models.DateField()
        num_guests = models.PositiveIntegerField()
        num_rooms = models.PositiveIntegerField()
        room_type = models.CharField(max_length=50)
        guest_details = models.JSONField()  # Store guest details as JSON

        def __str__(self):
            return self.name


class Destination(models.Model):
    title = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    days = models.IntegerField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    after_discount = models.DecimalField(max_digits=10, decimal_places=2)
    rating = models.DecimalField(max_digits=3, decimal_places=2)
    reviews = models.IntegerField()

    def __str__(self):
        return self.title
