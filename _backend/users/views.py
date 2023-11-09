################################################################################
# This 'views.py' file defines various Django Rest Framework (DRF) views for
# handling user-related operations, authentication, and profile retrieval.
# It includes views for user registration, token blacklist, and user profile
# retrieval.
################################################################################

from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView 
from rest_framework import generics
from . serializers import CustomUserSerializer, UserProfileSerializer
from . models import new_user_model
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import AllowAny, IsAuthenticated


# CustomUserCreate view allows user registration with a POST request.
class CustomUserCreate(APIView):
    permission_classes = [AllowAny]

    def post(self, request, format='json'):
        serializer = CustomUserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            if user:
                json = serializer.data
                return Response(json, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# BlacklistTokenUpdateView allows blacklisting a JWT token.
class BlacklistTokenUpdateView(APIView):
    permission_classes = [AllowAny]
    # authentication_classes = ()

    def post(self, request):
        try:
            refresh_token = request.data["refresh_token"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)

# RetriveUserTask view retrieves user profiles for authenticated users.
class RetriveUserTask(generics.RetrieveAPIView):
    permission_classes=[IsAuthenticated]
    serializer_class = UserProfileSerializer
    def get_queryset(self):
        current_user = self.request.user
        return new_user_model.objects.filter(user_id=current_user)


# The LarryLevel view is currently commented out and not active.

# class LarryLevel(APIView):
#     # permission_classes = [AllowAny]
#
#     def post(self, request, format='json'):
#         serializer = CustomUserSerializer(data=request.data)
#
#         if serializer.is_valid():
#             user = serializer.save()
#             if user:
#                 json = serializer.data
#                 return Response(json, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
