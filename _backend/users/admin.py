################################################################################
# This 'admin.py' file configures the Django admin interface for the 'new_user_model'
# model in the 'users' app. It defines a custom admin configuration class
# 'user_admin_config_model' that extends 'UserAdmin'. The custom admin class
# specifies how the user model is displayed and managed in the Django admin panel.
################################################################################

# Register your models here.
from django.contrib import admin
from .models import new_user_model
from django.contrib.auth.admin import UserAdmin
from django.forms import TextInput, Textarea, CharField
from django import forms
from django.db import models

# Custom admin configuration class for the 'new_user_model'.
class user_admin_config_model(UserAdmin):
    model = new_user_model
    search_fields = ('email', 'user_name', 'first_name',)
    list_filter = ('email', 'user_name', 'first_name', 'is_active', 'is_staff')
    ordering = ('-start_date',)
    list_display = ('email', 'user_name', 'first_name',
                    'is_active', 'is_staff')
    fieldsets = (
        (None, {'fields': ('email', 'user_name', 'first_name',)}),
        ('Permissions', {'fields': ('is_staff', 'is_active')}),
        ('Personal', {'fields': ('about',)}),
    )
    formfield_overrides = {
        models.TextField: {'widget': Textarea(attrs={'rows': 20, 'cols': 60})},
    }
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'user_name', 'first_name', 'password1', 'password2', 'is_active', 'is_staff')}
         ),
    )

# Register the 'new_user_model' with the custom admin configuration.
admin.site.register(new_user_model, user_admin_config_model)
