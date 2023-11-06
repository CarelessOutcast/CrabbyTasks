################################################################################
# This 'filters.py' file defines filter classes using Django filters for the
# 'task_model' model in the 'base' app. These filters allow for searching and
# filtering tasks based on various fields.
################################################################################

import django_filters
from ..models import task_model

# Filter class for tasks based on various fields.
class TaskFilter(django_filters.FilterSet):
    status = django_filters.CharFilter(lookup_expr='iexact')  
    task = django_filters.CharFilter(lookup_expr='icontains')  
    description= django_filters.CharFilter(lookup_expr='icontains')  
    created_at= django_filters.CharFilter(lookup_expr='icontains')  
    priority= django_filters.CharFilter(lookup_expr='icontains')  
    notifications= django_filters.CharFilter(lookup_expr='icontains')  
    deadline= django_filters.CharFilter(lookup_expr='icontains')  

    class Meta:
        model = task_model
        fields = [
                'status',
                'task',
                'description',
                'created_at',
                'priority',
                'notifications',
                'deadline'
                ]

# Filter class for tasks based on status.
class StatusFilter(django_filters.FilterSet):
    status = django_filters.CharFilter(lookup_expr='iexact')  # Case-insensitive partial match

    class Meta:
        model = task_model
        fields = ['status']

# Filter class for tasks based on priority.
class PriorityFilter(django_filters.FilterSet):
    priority = django_filters.CharFilter(lookup_expr='icontains')  # Case-insensitive partial match

    class Meta:
        model = task_model
        fields = ['priority']
