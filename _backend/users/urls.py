################################################################################
# This 'urls.py' file defines URL patterns for the 'users' app in a Django
# project. It maps specific URLs to corresponding views for user-related
# operations such as user profile retrieval, user creation, and token
# blacklisting.
################################################################################

from django.urls import path
from .views import CustomUserCreate, BlacklistTokenUpdateView, RetriveUserTask

app_name = 'users'

urlpatterns = [
    # URL pattern for retrieving user profile information.
    path('gather/', RetriveUserTask.as_view(), name="gather_user_info"),
    
    # URL pattern for creating a new user.
    path('create/', CustomUserCreate.as_view(), name="create_user"),
    
    # URL pattern for blacklisting a token (logging out).
    path('logout/blacklist/', BlacklistTokenUpdateView.as_view(), name='blacklist')
]

