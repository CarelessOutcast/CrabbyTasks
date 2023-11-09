
################################################################################
# This 'apps.py' file defines the configuration for the 'base' app of the Django
# project. It specifies the app's name and the default auto field for models.
################################################################################

from django.apps import AppConfig

# Configuration for the 'base' app.
class MainConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'base'

