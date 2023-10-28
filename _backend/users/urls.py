from django.urls import path
from .views import CustomUserCreate, BlacklistTokenUpdateView, RetriveUserTask

app_name = 'users'

urlpatterns = [
    path('gather/', RetriveUserTask.as_view(), name="gather_user_info"),
    path('create/', CustomUserCreate.as_view(), name="create_user"),
    path('logout/blacklist/', BlacklistTokenUpdateView.as_view(), name='blacklist')
]
