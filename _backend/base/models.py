################################################################################
# This 'models.py' file defines the data models for the 'base' app of the Django
# project. It includes a model called 'task_model' that represents tasks with
# various attributes such as status, description, deadline, priority, and more.
################################################################################

from django.db import models
from django.conf import settings
from django.utils import timezone
import uuid

# Choices for task status.
STATUSES = (
    ('ToDo', 'To Do'),
    ('In-Progress', 'In-Progress'),
    ('Complete', 'Complete'),
    ('Overdue', 'Overdue'),
)

# Choices for task notifications.
NOTIFICATIONS = (
    ('None', 'None'),
    ('Desktop Only', 'Desktop Only'),
    ('Email Only', 'Email Only'),
    ('Both', 'Both'),
)

# Choices for task priorities.
PRIORITIES = (
    ('1', 'Highest'),
    ('2', 'High'),
    ('3', 'Medium'),
    ('4', 'Low'),
    ('5', 'Lowest'),
)

# Choices for task categories.
CATEGORIES = (
    ('Work', 'Work'),
    ('School', 'School'),
    ('Chores', 'Chores'),
    ('Personal', 'Personal'),
    ('Other', 'Other'),
)


# Model for representing tasks.
class task_model(models.Model):
    user_id         = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE) #hidden
    task_id         = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    status          = models.CharField(max_length=11, choices=STATUSES, default='ToDo', editable=True)
    task            = models.CharField(max_length=30, editable=True)
    description     = models.CharField(max_length=250, editable=True, default="insert description")
    created_at      = models.DateTimeField('Created', default=timezone.now)
    updated_at      = models.DateTimeField('Updated', auto_now=True)
    deadline        = models.DateTimeField()
    priority        = models.CharField(max_length=7, choices=PRIORITIES, default=2)
    category        = models.CharField(max_length=8, choices=CATEGORIES, default='Other')
    notifications   = models.CharField(max_length=12, choices=NOTIFICATIONS, default='None')

     # Custom manager for querying only 'ToDo' status tasks.
    class tasks_objects(models.Manager):
        def for_user(self, user):
            return super().get_queryset().filter(user_id=user)
    
    objects = models.Manager() 
    tasks_objects = tasks_objects() 

    class Meta:
        ordering = ['-status',]

    def __str__(self):
	    return self.task

