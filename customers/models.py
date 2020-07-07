from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone

class Customer(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    phone = models.CharField(max_length=15,blank=True,null=True)
    location = models.CharField(max_length=200, blank=True)
    birth_date = models.DateField(null=True, blank=True)
