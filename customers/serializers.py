from django.contrib.auth.models import Group, User
from rest_framework import serializers
from .models import Customer

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'name', 'first_name', 'last_name']

class CustomerSerializer(serializers.ModelSerializer):
    username = serializers.CharField(read_only=True, source="user.username")
    first_name = serializers.CharField(read_only=True, source="user.first_name")
    date_joined = serializers.DateTimeField(read_only=True, source="user.date_joined")
    
    class Meta:
        model = Customer
        fields = ['username', 'first_name', 'date_joined', 'phone', 'birth_date']


# class GroupSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Group
#         fields = ['url', 'name']