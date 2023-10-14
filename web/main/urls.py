from django.urls import path
from . import views

urlpatterns = [
    path('', views.ReactView.as_view(), name='main'),


    #Add task button 
    path('add', views.add_task, name='task_add'),
    #"str:id" is the variable that is passed along from the object on the screen to the database to find the correct object
    #Update task button (complete)
    path('update/<str:id>', views.update_task , name='update_task'), 
    #Delete task button
    path('delete/<str:id>', views.delete_task, name='delete_task')
    ]
