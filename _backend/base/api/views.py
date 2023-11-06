################################################################################
# This 'views.py' file defines various API views for managing tasks in the 'base'
# app. It includes views for creating, retrieving, updating, and deleting tasks.
################################################################################

from ..models import *
from .serializer import *
from uuid import UUID

# Django REST API imports 
from rest_framework import generics, filters
from rest_framework.response import Response

# Filtering
from django_filters import rest_framework as filters
from .filters import *

# JWT AUTHENTICATION
from rest_framework.permissions import SAFE_METHODS, BasePermission, AllowAny, IsAuthenticated
from rest_framework_simplejwt.views import TokenObtainPairView

# ===================================================
# TOKEN GENERATE
# Custom Token Obtain Pair View
# ===================================================
class MyTokenObtainPairView(TokenObtainPairView):
    permission_classes=[AllowAny]
    serializer_class = MyTokenObtainPairSerializer

# ===================================================
# Object level permission!!
# Custom permission to allow only authors to edit tasks
# ===================================================
class TaskUserWritePermission(BasePermission):
    message = "Only author can edit"
    def has_object_permission(self,request,view,obj):
        if request.method in SAFE_METHODS:
            return True
        return obj.user_id == request.user

#### ===================================================
#### CLASS BASED VIEW 
#### ===================================================

# ===================================================
# GET ALL USER TASKS
# Retrieve tasks for the current user
# ===================================================
class RetriveUserTasks(generics.ListAPIView):
    permission_classes=[IsAuthenticated]
    serializer_class = TaskRetrieveSerializer
    def get_queryset(self): 
        current_user = self.request.user
        return task_model.objects.filter(user_id=current_user)

# ===================================================
# RETRIEVE SINGLE TASK
# Retrieve a single task for the current user
# ===================================================
class RetriveUserTask(generics.RetrieveAPIView):
    permission_classes=[IsAuthenticated]
    serializer_class = TaskRetrieveSerializer
    def get_queryset(self):
        current_user = self.request.user
        return task_model.objects.filter(user_id=current_user)

# ===================================================
# CREATE TASK
# Create a new task for the current user
# ===================================================
class CreateUserTask(generics.CreateAPIView):
    permission_classes=[IsAuthenticated]
    serializer_class = TaskCreateSerializer
    def get_queryset(self):
        current_user = self.request.user
        return task_model.objects.filter(user_id=current_user)

# ===================================================
# UPDATE TASK
# Update a task for the current user
# ===================================================
class UpdateUserTask(generics.RetrieveUpdateAPIView):
    permission_classes=[IsAuthenticated]
    serializer_class = TaskRetrieveSerializer

    def get_queryset(self):
        current_user = self.request.user
        return task_model.objects.filter(user_id=current_user)

    def get_object(self):
        pk = UUID(self.kwargs.get('pk'))
        return task_model.objects.get(task_id=pk)

    def partial_update(self, request, *args, **kwargs):
            instance = self.get_object()
            serializer = self.get_serializer(instance, data=request.data, partial=True)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return Response(serializer.data)

# ===================================================
# DELETE TASK
# Delete a task for the current user
# ===================================================
class DeleteUserTask(generics.RetrieveDestroyAPIView):
    permission_classes=[IsAuthenticated]
    serializer_class = TaskDeleteSerializer

    def get_queryset(self):
        current_user = self.request.user
        return task_model.objects.filter(user_id=current_user)

    def get_object(self):
        pk = UUID(self.kwargs.get('pk'))
        return task_model.objects.get(task_id=pk)

# ===================================================
# SEARCH
# Retrieve tasks with filtering for the current user
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
# Retrieve all tasks (allow any user)
# ===================================================
class RetriveAllTasks(generics.ListCreateAPIView):
    permission_classes=[AllowAny]
    queryset = task_model.objects.all()
    serializer_class = TaskRetrieveSerializer

# CRUD DEV TESTS (allow any user)
class RetriveAllTask(generics.RetrieveUpdateDestroyAPIView):
    permission_classes=[AllowAny]
    serializer_class = TaskRetrieveSerializer
    def get_queryset(self):
        task_id = self.request.task_id
        return task_model.objects.all()


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


