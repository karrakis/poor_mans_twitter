from django.db import models

# Create your models here.

class Tweet(models.Model):
    name = models.CharField(max_length=30)
    tweet = models.CharField(max_length=50)