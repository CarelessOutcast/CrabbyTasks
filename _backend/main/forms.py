from django import forms
from _backend.main.models import NOTIFICATIONS, PRIORITIES, STATUSES

class TaskForm(forms.Form):
    task_id         = forms.CharField(max_length=100)
    status          = forms.CharField(
                        max_length=11,
                        widget=forms.Select(choices=STATUSES)
                      )
    task            = forms.CharField(max_length=30)
    description     = forms.CharField(max_length=250)
    deadline        = forms.DateTimeField(required=True)
    priority        = forms.CharField(
                        max_length=7,
                        widget=forms.Select(choices=PRIORITIES)
                      )
    notifications   = forms.CharField(
                        max_length=12,
                        widget=forms.Select(choices=NOTIFICATIONS)
                      )