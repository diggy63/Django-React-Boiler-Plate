from rest_framework import serializers
from .models import Room, Views

class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = ("__all__")

class ViewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Views
        fields = ("__all__")