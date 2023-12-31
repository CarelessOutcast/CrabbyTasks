#!/usr/bin/env python

################################################################################
# This file, 'manage.py,' is the command-line utility for Django, used for
# administrative tasks in a Django project.
#
# It sets the Django settings module, imports Django's management module, and
# executes administrative tasks based on command-line arguments.
################################################################################

"""Django's command-line utility for administrative tasks."""
import os
import sys

def main():
    """Run administrative tasks."""
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    execute_from_command_line(sys.argv)


if __name__ == '__main__':
    if os.environ.get("ENV_TYPE") is None:
        import dotenv
        dotenv.read_dotenv()
    main()
