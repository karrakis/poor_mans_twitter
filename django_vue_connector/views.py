from django.shortcuts import render

# Create your views here.

def connector(request):
    return render(request, 'connector.html')