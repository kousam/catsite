from django.contrib import admin
from .models import Item, User

# Register your models here.

class UserAdmin(admin.ModelAdmin):
    list = ('username, password, email')

admin.site.register(User, UserAdmin)
    
    
    
class ItemAdmin(admin.ModelAdmin):
    list = ('id, title, username, price, desc, date, timestamp, sold, bought')

admin.site.register(Item, ItemAdmin)


