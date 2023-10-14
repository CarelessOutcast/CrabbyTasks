import uuid
from django.shortcuts import render, redirect, get_object_or_404
from django.http import HttpResponse
from django.views.decorators.http import require_http_methods
from .models import task_model, user_model

# Create your views here.
def index(request):
    return HttpResponse('Reload world')

@require_http_methods(["POST"])
def add_task(request):
    task = request.POST["task"]
    deadline        = request.POST['deadline']
    #Create a task_model object and assign each of it's values in the constructor
    #The task ID is a UUID casted to an integer and stored as a string to work with parsing through database
    taskToStore = task_model(
        task= task, 
        complete = False,
        deadline= deadline, 
        task_id= str(int(uuid.uuid4().int))
    )
    #Save the newly created task object to the database
    taskToStore.save()
    return redirect('taskmanager')
    
#update
def update_task(request, id):
    task = get_object_or_404(task_model, task_id= id)
    task.complete = not task.complete
    task.save()
    return redirect('taskmanager')
    
#delete
def delete_task(request, id):
    task = get_object_or_404(task_model, task_id= id)
    task.delete()
    return redirect('taskmanager')
