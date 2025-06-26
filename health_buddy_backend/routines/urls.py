from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import RoutineViewSet

# Crea un router y registra nuestro viewset con él.
router = DefaultRouter()
router.register(r'routines', RoutineViewSet, basename='routine')

# Las URLs de la API son determinadas automáticamente por el router.
urlpatterns = [
    path('', include(router.urls)),
]
