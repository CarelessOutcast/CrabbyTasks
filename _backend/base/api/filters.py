from typing import Optional
import django_filters
from ..models import task_model

class TaskFilter(django_filters.FilterSet):
    status = django_filters.CharFilter(lookup_expr='iexact')  # Case-insensitive partial match
    task = django_filters.CharFilter(lookup_expr='icontains')  # Case-insensitive partial match
    description= django_filters.CharFilter(lookup_expr='icontains')  # Case-insensitive partial match
    created_at= django_filters.CharFilter(lookup_expr='icontains')  # Case-insensitive partial match
    priority= django_filters.CharFilter(lookup_expr='icontains')  # Case-insensitive partial match
    notifications= django_filters.CharFilter(lookup_expr='icontains')  # Case-insensitive partial match
    deadline= django_filters.CharFilter(lookup_expr='icontains')  # Case-insensitive partial match

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


class StatusFilter(django_filters.FilterSet):
    status = django_filters.CharFilter(lookup_expr='iexact')  # Case-insensitive partial match

    class Meta:
        model = task_model
        fields = ['status']

class PriorityFilter(django_filters.FilterSet):
    priority = django_filters.CharFilter(lookup_expr='icontains')  # Case-insensitive partial match

    class Meta:
        model = task_model
        fields = ['priority']
