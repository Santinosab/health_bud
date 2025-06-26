# backend/urls.py
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('routines.urls')),
    path('api/auth/', include('users.urls')), # <-- AÑADE ESTA LÍNEA
]