from django.urls import path
from rest_framework_simplejwt.views import (
        TokenRefreshView
        )
from . import views

app_name = 'api'

urlpatterns = [
        path('', views.TasksList.as_view(),name='listcreate'),
        path('token/', views.MyTokenObtainPairView.as_view(),name='token_obtain_pair'),
        path('token/refresh/', TokenRefreshView.as_view(),name='token_refresh'),
        ]

