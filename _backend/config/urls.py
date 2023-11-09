################################################################################
# This 'urls.py' file defines the URL patterns for the Django project. It
# includes URL patterns for the admin panel, various app-specific URLs, and
# authentication-related URLs using the Django include() function.
################################################################################

from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    # URL pattern for the admin panel.
    path('admin/', admin.site.urls),

    # URL pattern for the 'base' app, including its sub-URL patterns.
    path('', include('base.urls', namespace='base')),

    # URL pattern for user-related API endpoints in the 'users' app.
    path('api/user/', include('users.urls', namespace='users')),

    # URL pattern for API endpoints in the 'base.api' app.
    path('api/', include('base.api.urls', namespace='api')),

    # URL pattern for authentication-related endpoints using the rest_framework.
    path('api-auth/', include('rest_framework.urls',namespace='rest_framework')),
]
