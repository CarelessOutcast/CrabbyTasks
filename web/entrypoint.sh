#!/bin/bash

APP_PORT=${PORT:-8000}
cd /app/

if ["$ENV_TYPE" = "production"]; then 
  echo "Loading Production server..."
  /opt/env/bin/gunicorn --worker-tmp-dir /dev/shm crabbytasks.wsgi:application --bind "0.0.0.0:${APP_PORT}"
else
  echo "Loading Development server..."
  /opt/env/bin/python manage.py runserver 0.0.0.0:8000
fi
