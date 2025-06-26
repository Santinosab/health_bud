from rest_framework import serializers
from .models import Routine

class RoutineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Routine
        fields = ['id', 'name', 'description', 'created_at']
