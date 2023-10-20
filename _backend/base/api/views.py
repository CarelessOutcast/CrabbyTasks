from ..models import *
from .serializer import *

# Django REST API imports 
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import generics
from rest_framework.permissions import SAFE_METHODS, BasePermission, DjangoModelPermissionsOrAnonReadOnly

#Object level permission!!
class TaskUserWritePermission(BasePermission):
    message = "How did you manage to get here"
    def has_object_permission(self,request,view,obj):
        if request.method in SAFE_METHODS:
            return True
        return obj.user_id == request.user

#jwt auth
from rest_framework_simplejwt.views import TokenObtainPairView
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer



#Function based view
@api_view(['GET'])
def getRoutes(request):
    permission_classes=[DjangoModelPermissionsOrAnonReadOnly]
    routes =[
            '/api/token',
            '/api/token/refresh',
            ]
            
    return Response(routes)


#Class based view 
class TasksList(generics.ListCreateAPIView):
    # Adding security permissions
    permission_classes=[DjangoModelPermissionsOrAnonReadOnly]
    queryset = task_model.objects.all()
    serializer_class = TaskSerializer
    # def get(self,request):
    #     return Response()
    # def post(self,request):
    #     return Response()
    # pass

class TaskDetail(generics.RetrieveUpdateDestroyAPIView,TaskUserWritePermission):
    permission_classes=[TaskUserWritePermission] # Only the user can edit their tasks
    queryset= task_model.objects.all()
    serializer_class =TaskSerializer





