import django_filters
from ..models import task_model

class TaskFilter(django_filters.FilterSet):
    task = django_filters.CharFilter(lookup_expr='icontains')  # Case-insensitive partial match

    class Meta:
        model = task_model
        fields = ['task']

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
