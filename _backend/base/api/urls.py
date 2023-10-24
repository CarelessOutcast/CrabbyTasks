from django.urls import path
from rest_framework_simplejwt.views import (
        TokenRefreshView
        )
from . import views

app_name = 'api'

urlpatterns = [
        # AUTH TOKEN ENDPOINTS 
        path('token/', views.MyTokenObtainPairView.as_view(),name='token_obtain_pair'),
        path('token/refresh/', TokenRefreshView.as_view(),name='token_refresh'),
        # CRUD ENDPOINTS
        path('', views.RetriveUserTasks.as_view(),name='retrieve_tasks'),
        # path('retrieve/', views.RetriveUserTasks.as_view(),name='retrieve_tasks'),
        path('create/', views.CreateUserTask.as_view(),name='create_task'),
        path('update/<int:pk>/', views.UpdateUserTask.as_view(),name='update_task'),
        path('delete/<int:pk>/', views.DeleteUserTask.as_view(),name='delete_task'),
        # path('retrieve/<str:task_id>/', views.RetriveUserTask.as_view(), name='retrive_task'),
        
        path('search/', views.RetriveUnknownUserTask.as_view(),name='retrive_unknown_task'),
        path('searchAll/', views.RetriveUnknownUserTasks.as_view(),name='retrive_unknown_task'),
        path('all/', views.RetriveAllTasks.as_view(),name='all_tasks'),
        ] 

