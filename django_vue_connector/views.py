from django.shortcuts import render

from rest_framework import viewsets

from .serializers import TweetSerializer
from .models import Tweet

# Create your views here.

def connector(request):
    return render(request, 'connector.html')

class TweetViewSet(viewsets.ModelViewSet):
    queryset = Tweet.objects.all().order_by('timestamp')
    serializer_class = TweetSerializer
