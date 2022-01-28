from rest_framework import serializers
from .models import User, Item

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'password', 'email')
        
        
class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ('id', 'title', 'username', 'price', 'desc', 'date', 'timestamp', 'sold', 'bought')