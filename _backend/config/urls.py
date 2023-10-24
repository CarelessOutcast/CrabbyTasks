from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('base.urls', namespace='base')),
    path('api/user/', include('users.urls', namespace='users')),
    path('api/', include('base.api.urls', namespace='api')),
    path('api-auth/', include('rest_framework.urls',namespace='rest_framework')),
]
