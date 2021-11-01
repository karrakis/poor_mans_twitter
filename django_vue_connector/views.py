from django.shortcuts import render

from .serializers import TweetSerializer
from .models import Tweet

# Create your views here.

def connector(request):
    return render(request, 'connector.html')

