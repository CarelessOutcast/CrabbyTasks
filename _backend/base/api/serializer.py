from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from ..models import * 


class TaskSerializer(serializers.ModelSerializer):
    class Meta: 
        model = task_model
        fields = ['user_id','task','description','created_at','priority','notifications','deadline']



class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.email
        # ...

        return token

