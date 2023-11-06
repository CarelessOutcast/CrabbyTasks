################################################################################
# This 'apps.py' file defines the configuration for the 'users' app within a
# Django project. It specifies the app's default auto field and its name.
################################################################################

from django.apps import AppConfig


class UsersConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'users'
