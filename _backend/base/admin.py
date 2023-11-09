################################################################################
# This 'admin.py' file defines the admin interface for the 'base' app of the
# Django project. It registers the 'task_model' model and customizes its
# display in the admin panel.
################################################################################

from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.forms import TextInput, Textarea, CharField
from django import forms
from .models import *

# Register your models here.

# Register the 'task_model' model in the admin panel.
@admin.register(task_model)
class UserAdmin(admin.ModelAdmin):
    list_display=('task','description','status','priority','deadline','notifications','user_id')
