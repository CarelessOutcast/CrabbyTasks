from django.db import models
from django.conf import settings
from django.utils import timezone
import uuid

#creates table in database for user and their information

STATUSES = (
    ('ToDo', 'To Do'),
    ('In-Progress', 'In-Progress'),
    ('Complete', 'Complete'),
    ('Overdue', 'Overdue'),
)

NOTIFICATIONS = (
    ('None', 'None'),
    ('Desktop Only', 'Desktop Only'),
    ('Email Only', 'Email Only'),
    ('Both', 'Both'),
)

PRIORITIES = (
    ('1', 'Highest'),
    ('2', 'High'),
    ('3', 'Medium'),
    ('4', 'Low'),
    ('5', 'Lowest'),
)
CATEGORIES = (
    ('Work', 'Work'),
    ('School', 'School'),
    ('Chores', 'Chores'),
    ('Personal', 'Personal'),
    ('Other', 'Other'),
)


#creates table in database for tasks and their information
class task_model(models.Model):
    #Add query model permissions: https://www.django-rest-framework.org/api-guide/permissions/#djangomodelpermissions

    # only status=todo objects are queried
    class tasks_objects(models.Manager):
        def for_user(self, user):
            return super().get_queryset().filter(user_id=user)

    user_id         = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE) #hidden
    # The following field will contain a UUID casted to an integer as a string
    task_id         = models.CharField(max_length=100, editable=False, default=str(uuid.uuid4())) #hidden
    status          = models.CharField(max_length=11, choices=STATUSES, default='ToDo', editable=True)
    task            = models.CharField(max_length=30, editable=True)
    description     = models.CharField(max_length=250, editable=True, default="insert description")
    created_at      = models.DateTimeField('Created', default=timezone.now)
    updated_at      = models.DateTimeField('Updated', auto_now=True)
    deadline        = models.DateTimeField()
    priority        = models.CharField(max_length=7, choices=PRIORITIES, default=2)
    category        = models.CharField(max_length=8, choices=CATEGORIES, default='Other')
    notifications   = models.CharField(max_length=12, choices=NOTIFICATIONS, default='None')
    # time_remaining  = models.CharField(max_length=25) #would need javascript or something to implement timer properly
    # This is how we can specifically ask for things on ORM; Implies 

    objects = models.Manager() #get all db tasks
    tasks_objects = tasks_objects() #limited to user
    
    class Meta:
        ordering = ['-status',]

    def __str__(self):
	    return self.task

