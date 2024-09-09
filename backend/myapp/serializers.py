# serializers.py
from rest_framework import serializers
from .models import Order
from .models import Contact
class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ['id', 'name', 'mobile', 'password', 'address', 'total',]

# backend/myapp/serializers.py

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = '__all__'
