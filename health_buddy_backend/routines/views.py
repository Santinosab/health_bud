from rest_framework import viewsets
from .models import Routine
from .serializers import RoutineSerializer

class RoutineViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows routines to be viewed or edited.
    """
    queryset = Routine.objects.all().order_by('-created_at')
    serializer_class = RoutineSerializer
