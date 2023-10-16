from rest_framework import serializers
from ..models import * 


class TaskSerializer(serializers.ModelSerializer):
    class Meta: 
        model = task_model
        fields = ['task_id', 'complete', 'task', 'deadline']

