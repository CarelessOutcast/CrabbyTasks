"""
Django settings for crabbytasks project.

Generated by 'django-admin startproject' using Django 4.2.5.

For more information on this file, see
https://docs.djangoproject.com/en/4.2/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/4.2/ref/settings/
"""

from pathlib import Path
from datetime import timedelta

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
    'base.apps.MainConfig',
    'users.apps.UsersConfig',
    'rest_framework', 
    'rest_framework_simplejwt',
    'rest_framework_simplejwt.token_blacklist',
    'corsheaders', #Cross Origin Resource Sharing Headers
    'django_filters',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'config.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [BASE_DIR / 'base/templates'],
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

WSGI_APPLICATION = 'config.wsgi.application'


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

if not DEBUG: 
    STATIC_ROOT = '/var/www/static'

STATIC_URL = 'static/'

# Default primary key field type
# https://docs.djangoproject.com/en/4.2/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'



SIMPLE_JWT = {
    "ACCESS_TOKEN_LIFETIME": timedelta(minutes=5),
    "REFRESH_TOKEN_LIFETIME": timedelta(days=1),
    "ROTATE_REFRESH_TOKENS": False,
    "BLACKLIST_AFTER_ROTATION": True,
    "UPDATE_LAST_LOGIN": True,

    "ALGORITHM": "HS256",
    "SIGNING_KEY": SECRET_KEY,
    "VERIFYING_KEY": "",
    "AUDIENCE": None,
    "ISSUER": None,
    "JSON_ENCODER": None,
    "JWK_URL": None,
    "LEEWAY": 0,

    "AUTH_HEADER_TYPES": ("Bearer",),
    "AUTH_HEADER_NAME": "HTTP_AUTHORIZATION",
    "USER_ID_FIELD": "id",
    "USER_ID_CLAIM": "user_id",
    "USER_AUTHENTICATION_RULE": "rest_framework_simplejwt.authentication.default_user_authentication_rule",

    "AUTH_TOKEN_CLASSES": ("rest_framework_simplejwt.tokens.AccessToken",),
    "TOKEN_TYPE_CLAIM": "token_type",
    "TOKEN_USER_CLASS": "rest_framework_simplejwt.models.TokenUser",

    "JTI_CLAIM": "jti",

    "SLIDING_TOKEN_REFRESH_EXP_CLAIM": "refresh_exp",
    "SLIDING_TOKEN_LIFETIME": timedelta(minutes=5),
    "SLIDING_TOKEN_REFRESH_LIFETIME": timedelta(days=1),

    # "TOKEN_OBTAIN_SERIALIZER": "rest_framework_simplejwt.serializers.TokenObtainPairSerializer",
    "TOKEN_OBTAIN_SERIALIZER": "my_app.serializers.MyTokenObtainPairSerializer",
    "TOKEN_REFRESH_SERIALIZER": "rest_framework_simplejwt.serializers.TokenRefreshSerializer",
    "TOKEN_VERIFY_SERIALIZER": "rest_framework_simplejwt.serializers.TokenVerifySerializer",
    "TOKEN_BLACKLIST_SERIALIZER": "rest_framework_simplejwt.serializers.TokenBlacklistSerializer",
    "SLIDING_TOKEN_OBTAIN_SERIALIZER": "rest_framework_simplejwt.serializers.TokenObtainSlidingSerializer",
    "SLIDING_TOKEN_REFRESH_SERIALIZER": "rest_framework_simplejwt.serializers.TokenRefreshSlidingSerializer",
}

APPEND_SLASH=False

#Rest Framework settings
AUTH_USER_MODEL = "users.new_user_model"

#https://www.django-rest-framework.org
REST_FRAMEWORK = {
        'DEFAULT_PERMISSION_CLASSES':[
            'rest_framework.permissions.AllowAny',
            ],
        'DEFAULT_AUTHENTICATION_CLASSES': (
            'rest_framework_simplejwt.authentication.JWTAuthentication',
            # 'rest_framework.authentication.SessionAuthentication',
            ),
        }
#Documentation
#https://github.com/adamchainz/django-cors-headers
# TODO add specified origins
CORS_ORIGIN_ALLOW_ALL = True
# CORS_ALLOWED_ORIGINS = ['']


