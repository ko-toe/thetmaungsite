from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

# def index(request):
#     return HttpResponse("Hello, world. You're at Thet Maung Home Page.")

def index(request):
    return render(request, 'index.html',{'content':'Mg'})

def about(request):
    return render(request,'about.html',{'content':'About'})