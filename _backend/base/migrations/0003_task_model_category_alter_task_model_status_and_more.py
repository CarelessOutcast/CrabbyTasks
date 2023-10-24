# Generated by Django 4.2.5 on 2023-10-24 00:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0002_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='task_model',
            name='category',
            field=models.CharField(choices=[('Work', 'Work'), ('School', 'School'), ('Chores', 'Chores'), ('Personal', 'Personal'), ('Other', 'Other')], default='Other', max_length=8),
        ),
        migrations.AlterField(
            model_name='task_model',
            name='status',
            field=models.CharField(choices=[('ToDo', 'To Do'), ('In-Progress', 'In-Progress'), ('Complete', 'Complete'), ('Overdue', 'Overdue')], default='ToDo', max_length=11),
        ),
        migrations.AlterField(
            model_name='task_model',
            name='task_id',
            field=models.CharField(default='47f6c2da-e5c5-464b-9660-cee7eb652b33', editable=False, max_length=100),
        ),
    ]