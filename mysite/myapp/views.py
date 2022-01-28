from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from rest_framework import viewsets 
from rest_framework import filters
from rest_framework import generics
from rest_framework.decorators import api_view
from django.urls import reverse

from django_filters.rest_framework import DjangoFilterBackend


from .serializers import UserSerializer, ItemSerializer 
from .models import User, Item

from django_filters.filters import Filter

# Create your views here.




def landing(request):
    response = render(request, 'landing.html', {'item_count':Item.objects.count()})
    return response







class ItemView(generics.ListAPIView):  
    queryset = Item.objects.all()
    serializer_class = ItemSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = ['id','username','sold']
    search_fields = ['title']


    





    
class UserView(generics.ListAPIView):   
    queryset = User.objects.all()
    serializer_class = UserSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['username']
    
    
    
@api_view(['POST'])
def repopulate(request):
    Item.objects.all().delete()
    
    
    for i in range(10):
        username = 'testuser{}'.format(i)
        password = 'pass{}'.format(i)
        email = 'testuser{}@shop.aa'.format(i)
        
    for i in range(3):
        for j in range(10):
            title = 'cat{}'.format(i * 10 + j)
            username = 'testuser{}'.format(i)
            price = 0.99 + j
            desc = 'this cat is {} years old'.format(j)
            bought = ""
        
            Item.objects.create(title=title, username=username, price=price, desc=desc, sold=False, bought=bought)
    
    
    
    return HttpResponseRedirect(reverse('landing'))
        
    
    