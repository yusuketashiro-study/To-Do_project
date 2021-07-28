from django.urls import path
from .views import IpList

urlpatterns = [
    path('', IpList.as_view()),
]
