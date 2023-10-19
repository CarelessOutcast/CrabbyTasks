from django.db import models
import uuid

#creates table in database for user and their information
class user_model(models.Model):
    id = models.UUIDField(
            primary_key = True,
            default     = uuid.uuid4(),
            editable    = False
    )
    first_name  = models.CharField(max_length=100)
    last_name   = models.CharField(max_length=100)
    username    = models.CharField(max_length=50)
    password    = models.CharField(max_length=50)
    email       = models.CharField(max_length=100)

STATUSES = (
    ('To Do', 'To Do'),
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

#creates table in database for tasks and their information
class task_model(models.Model):
    user_id         = models.ForeignKey(user_model, on_delete=models.CASCADE) #hidden
    #The following field will contain a UUID casted to an integer as a string
    task_id         = models.CharField(max_length=100, editable=False, default=str(uuid.uuid4())) #hidden
    status          = models.CharField(max_length=11, choices=STATUSES, default='To Do', editable=True)
    task            = models.CharField(max_length=30, editable=True)
    description     = models.CharField(max_length=250, editable=True)
    created_at      = models.DateTimeField('Created', auto_now_add=True)
    updated_at      = models.DateTimeField('Updated', auto_now=True)
    deadline        = models.DateTimeField()
    priority        = models.CharField(max_length=7, choices=PRIORITIES)
    notifications   = models.CharField(max_length=12, choices=NOTIFICATIONS, default='None')
    # time_remaining  = models.CharField(max_length=25) #would need javascript or something to implement timer properly
    
    def __str__(self):
	    return self.task
    
