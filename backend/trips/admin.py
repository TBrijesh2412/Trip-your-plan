# app/admin.py

from django.contrib import admin
from .models import Search, UserProfile,Hotel,Restaurant,HotelDetail,Booking,Destination

admin.site.register(Search)
admin.site.register(UserProfile)
admin.site.register(Hotel)
admin.site.register(Restaurant)
admin.site.register(HotelDetail)
admin.site.register(Booking)
admin.site.register(Destination)
