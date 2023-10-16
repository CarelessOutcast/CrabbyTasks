from django.http import JsonResponse

# Django REST API imports 
from rest_framework.views import APIView
from ..models import *
from .serializer import *
from rest_framework.response import Response
from rest_framework.decorators import api_view

@api_view(['GET'])
def getRoutes(request):
    routes =[
            '/api/token',
            '/api/token/refresh',
            ]
            
    return Response(routes)


class ReactView(APIView):
    def get(self, request):
        output = [{"task_id": output.task_id, "complete": output.complete,
                   "task": output.task, "deadline": output.deadline }
                  for output in task_model.objects.all() ]
        return Response(output)

    def post(self, request):
        serializer = TaskSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)
