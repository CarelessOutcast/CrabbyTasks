################################################################################
# This 'asgi.py' file is the ASGI (Asynchronous Server Gateway Interface) entry
# point for the Django application. It sets up the Django environment and gets
# the ASGI application using 'get_asgi_application'.
################################################################################

import os
from django.core.asgi import get_asgi_application

# Set the Django settings module to 'config.settings'.
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')

# Get the ASGI application using 'get_asgi_application'.
application = get_asgi_application()

