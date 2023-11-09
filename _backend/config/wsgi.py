################################################################################
# This 'wsgi.py' file is the entry point for the Django application when hosted
# on a web server. It sets up the Django environment, reads environment variables
# from a .env file, and initializes the Django application using 'get_wsgi_application'.
################################################################################

import os, pathlib
from django.core.wsgi import get_wsgi_application

# Check if the 'ENV_ENTRY' environment variable is set and read a .env file if it's not.
if os.environ.get("ENV_ENTRY") is None:
    import dotenv
    CURRENT_DIR = pathlib.Path(__file__).resolve().parent
    BASE_DIR = CURRENT_DIR.parent
    ENV_FILE_PATH = BASE_DIR / ".env"
    dotenv.read_dotenv(str(ENV_FILE_PATH))

# Set the Django settings module to 'config.settings'.
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')

# Initialize the Django application using 'get_wsgi_application'.
application = get_wsgi_application()
