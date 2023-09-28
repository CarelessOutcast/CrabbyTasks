"""
Django settings for crabbytasks project.

Generated by 'django-admin startproject' using Django 4.2.5.

For more information on this file, see
https://docs.djangoproject.com/en/4.2/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/4.2/ref/settings/
"""

from pathlib import Path
import os

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/4.2/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = os.environ.get("DJANGO_SECRET_KEY")

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = str(os.environ.get("DEBUG")) == "1"

ALLOWED_HOSTS = ["*","red-lobster.dev"]


# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'main',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'crabbytasks.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'crabbytasks.wsgi.application'

# Database
# https://docs.djangoproject.com/en/4.2/ref/settings/#databases
DB_ENGINE               =os.environ.get("DB_ENGINE")

DB_PRODUCTION_NAME      =os.environ.get("DB_PRODUCTION_NAME")
DB_PRODUCTION_USERNAME  =os.environ.get("DB_PRODUCTION_USER")
DB_PRODUCTION_PASSWORD  =os.environ.get("DB_PRODUCTION_PASSWORD")
DB_PRODUCTION_HOST      =os.environ.get("DB_PRODUCTION_HOST")
DB_PRODUCTION_PORT      =os.environ.get("DB_PRODUCTION_PORT")

DB_DEVELOPER_NAME       =os.environ.get("DB_DEVELOPER_NAME")
DB_DEVELOPER_USERNAME   =os.environ.get("DB_DEVELOPER_USER")
DB_DEVELOPER_PASSWORD   =os.environ.get("DB_DEVELOPER_PASSWORD")
DB_DEVELOPER_HOST       =os.environ.get("DB_DEVELOPER_HOST")
DB_DEVELOPER_PORT       =os.environ.get("DB_DEVELOPER_PORT")

PROD_IS_AVAIL = all([
    DB_PRODUCTION_NAME,
    DB_PRODUCTION_USERNAME,
    DB_PRODUCTION_PASSWORD,
    DB_PRODUCTION_HOST,
    DB_PRODUCTION_PORT,
])

DEV_IS_AVAIL = all([
    DB_DEVELOPER_NAME,
    DB_DEVELOPER_USERNAME,
    DB_DEVELOPER_PASSWORD,
    DB_DEVELOPER_HOST,
    DB_DEVELOPER_PORT,
])

if DEBUG:
    DATABASES = {
            'default': {
                'ENGINE':DB_ENGINE,
                'NAME':DB_DEVELOPER_NAME,
                'USER':DB_DEVELOPER_USERNAME,
                'PASSWORD':DB_DEVELOPER_PASSWORD,
                'HOST':DB_DEVELOPER_HOST,
                'PORT':DB_DEVELOPER_PORT,
                }
            }
else:
    DATABASES = {
            'default': {
                'ENGINE':DB_ENGINE,
                'NAME':DB_PRODUCTION_NAME,
                'USER':DB_PRODUCTION_USERNAME,
                'PASSWORD':DB_PRODUCTION_PASSWORD,
                'HOST':DB_PRODUCTION_HOST,
                'PORT':DB_PRODUCTION_PORT,
                }
            }

# Password validation
# https://docs.djangoproject.com/en/4.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/4.2/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.2/howto/static-files/

STATIC_URL = 'static/'

# Default primary key field type
# https://docs.djangoproject.com/en/4.2/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'
