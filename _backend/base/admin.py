from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.forms import TextInput, Textarea, CharField
from django import forms
from .models import *

# Register your models here.

@admin.register(task_model)
class UserAdmin(admin.ModelAdmin):
    list_display=('task','description','status','priority','deadline','notifications','user_id')






