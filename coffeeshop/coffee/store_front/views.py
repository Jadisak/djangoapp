from django.shortcuts import render
from django.http import HttpResponse
from .models import Front


def home(request):
    front = Front.objects.all()
    return render(request, 'home.html', {'Front': front})
