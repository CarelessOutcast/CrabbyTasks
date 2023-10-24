from rest_framework.exceptions import status
from rest_framework.views import APIView
from ..models import *
from .serializer import *

# Django REST API imports 
from rest_framework import generics, filters
from rest_framework.response import Response

# Filtering
from django_filters import rest_framework as filters
from .filters import *

# https://www.django-rest-framework.org/tutorial/4-authentication-and-permissions/#tutorial-4-authentication-permissions
from rest_framework.permissions import SAFE_METHODS, BasePermission, AllowAny, IsAuthenticated, IsAuthenticatedOrReadOnly
#jwt aut
from rest_framework_simplejwt.views import TokenObtainPairView

import logging
logger = logging.getLogger(__name__)

# ===================================================
# TOKEN GENERATE
# ===================================================
class MyTokenObtainPairView(TokenObtainPairView):
    permission_classes=[AllowAny]
    serializer_class = MyTokenObtainPairSerializer

# ===================================================
# Object level permission!!
# ===================================================
class TaskUserWritePermission(BasePermission):
    message = "Only author can edit"
    def has_object_permission(self,request,view,obj):
        if request.method in SAFE_METHODS:
            return True
        return obj.user_id == request.user

# ===================================================
# CLASS BASED VIEW 
# ===================================================

# ===================================================
# TODO Figure out how to make a more flexible search
# class SearchUserTasks(generics.ListCreateAPIView):
#     # permission_classes=[DjangoModelPermissionsOrAnonReadOnly]
#     serializer_class = TaskRetrieveSerializer
#     filter_backends=[filters.DjangoFilterBackend]
#     filterset_class= StatusFilter
#     def get_queryset(self):
#         current_user = self.request.user
#         return task_model.tasks_objects.for_user(current_user)
# ===================================================


# ===================================================
# GET ALL USER TASKS
# ===================================================
class RetriveUserTasks(generics.ListAPIView):
    permission_classes=[IsAuthenticated]
    serializer_class = TaskRetrieveSerializer
    def get_queryset(self): 
        current_user = self.request.user
        return task_model.objects.filter(user_id=current_user)

# ===================================================
# RETRIEVE SINGLE TASK
# ===================================================
class RetriveUserTask(generics.RetrieveAPIView):
    permission_classes=[IsAuthenticated]
    serializer_class = TaskRetrieveSerializer
    def get_queryset(self):
        current_user = self.request.user
        return task_model.objects.filter(user_id=current_user)

# ===================================================
# CREATE TASK
# ===================================================
class CreateUserTask(generics.CreateAPIView):
    permission_classes=[IsAuthenticated]
    serializer_class = TaskCreateSerializer
    def get_queryset(self):
        current_user = self.request.user
        return task_model.objects.filter(user_id=current_user)

# ===================================================
# UPDATE TASK
# ===================================================
class UpdateUserTask(generics.UpdateAPIView):
    permission_classes=[IsAuthenticated]
    serializer_class = TaskRetrieveSerializer
    def get_queryset(self):
        current_user = self.request.user
        return task_model.objects.filter(user_id=current_user)

# ===================================================
# DELETE TASK
# ===================================================
class DeleteUserTask(generics.RetrieveDestroyAPIView):
    permission_classes=[IsAuthenticated]
    serializer_class = TaskRetrieveSerializer
    def get_queryset(self):
        current_user = self.request.user
        return task_model.objects.filter(user_id=current_user)

# ===================================================
# Search for unknown single ?task=<PartialNameOfTask>
# ===================================================
class RetriveUnknownUserTask(generics.ListCreateAPIView):
    permission_classes=[IsAuthenticated]
    serializer_class = TaskRetrieveSerializer
    filter_backends=[filters.DjangoFilterBackend]
    filterset_class= TaskFilter
    def get_queryset(self):
        current_user = self.request.user
        return task_model.objects.filter(user_id=current_user)

# ===================================================
# GET ALL DB TASKS
# ===================================================
class RetriveAllTasks(generics.ListCreateAPIView):
    permission_classes=[IsAuthenticatedOrReadOnly]
    queryset = task_model.objects.all()
    serializer_class = TaskRetrieveSerializer





