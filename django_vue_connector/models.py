from django.db import models

# Create your models here.

class Tweet(models.Model):
    name = models.CharField(max_length=30)
    tweet = models.CharField(max_length=50)
    timestamp = models.DateTimeField(auto_now_add=True)