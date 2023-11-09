################################################################################
# This 'serializers.py' file defines serializer classes using Django Rest
# Framework for the 'task_model' model in the 'base' app. These serializers
# handle the conversion of model data to JSON format and vice versa for tasks.
################################################################################

from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from ..models import * 
import uuid

# JWT Authentication
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        # Sending custom info with JWT
        token['username'] = user.email
        # ...

        return token

# Serializer for retrieving task details
class TaskRetrieveSerializer(serializers.ModelSerializer):
    class Meta: 
        model = task_model
        fields = [
                'task_id',
                'user_id',
                'task',
                'description',
                'status',
                'created_at',
                'priority',
                'category',
                'notifications',
                'deadline'
                ]

# Serializer for creating tasks
class TaskCreateSerializer(serializers.ModelSerializer):
    class Meta: 
        model = task_model
        fields = [
                'status',
                'task',
                'description',
                'deadline',
                'priority',
                'category',
                'notifications',
                ]

    def create(self, validated_data):
        user = self.context['request'].user
        task = task_model.objects.create(user_id=user, **validated_data)
        return task

# Serializer for deleting tasks
class TaskDeleteSerializer(serializers.ModelSerializer):
    class Meta: 
        model = task_model
        fields = [
                'task_id',
                ]
    


