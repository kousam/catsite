from django.db import models

# Create your models here.


class User(models.Model):
    username = models.CharField(max_length=30)
    password = models.CharField(max_length=30)
    email = models.CharField(max_length=30)
    
    
class Item(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=60)
    username = models.CharField(max_length=30)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    desc = models.TextField()
    date = models.DateField(auto_now_add=True)
    timestamp = models.DateTimeField(auto_now_add=True)
    sold = models.BooleanField(default=False)
    bought = models.CharField(max_length=30)
    
    
    def _str_(self):
        return self.title
