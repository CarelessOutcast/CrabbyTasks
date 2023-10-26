# Generated by Django 4.2.5 on 2023-10-25 04:58

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0003_task_model_category_alter_task_model_status_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='task_model',
            name='id',
        ),
        migrations.AlterField(
            model_name='task_model',
            name='task_id',
            field=models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False),
        ),
    ]
