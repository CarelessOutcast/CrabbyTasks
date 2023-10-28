from rest_framework import serializers
from .models import new_user_model


class CustomUserSerializer(serializers.ModelSerializer):
    """
    Currently unused in preference of the below.
    """
    email = serializers.EmailField(required=True)
    user_name = serializers.CharField(required=True)
    password = serializers.CharField(min_length=8, write_only=True)

    class Meta:
        model = new_user_model
        fields = ('email', 'user_name', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        # as long as the fields are the same, we can just use this
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta: 
        model: new_user_model
        fields = ('email', 'user_name', 'first_name')
    


# class UserLarryLevelSerializer(serializers.ModelSerializer):
#     """
#     Currently unused in preference of the below.
#     """
#     class Meta:
#         model = new_user_model
#         fields = ('level')
#     def post(self, levelData):
#         level = levelData.level
#         # as long as the fields are the same, we can just use this
#         instance = self.Meta.model(**level)
#         if level is not None:
#             instance.levelCalculate(level)
#         instance.save()
#         return instance
