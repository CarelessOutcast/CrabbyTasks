################################################################################
# This 'tests.py' file contains test cases for the 'base' app of the Django project.
# It includes a test class 'Test_Create_Post' that defines setup data and tests
# for the 'task_model' model. The tests check if the task object's attributes
# match the expected values after creation.
################################################################################

from django.test import TestCase
from django.contrib.auth.models import User
from .models import task_model

# Test class for creating and testing task objects.
class Test_Create_Post(TestCase):

     # Set up test data before running the tests.
    @classmethod
    def test_setUpTestData(cls):
        test_user1= User.objects.create_user(username="test_user1",password="123456789")
        test_task=task_model.objects.create(user_id=1,
                                            status='To Do',
                                            task="test",
                                            description="TEST",
                                            deadline="1/1/2024",
                                            priority=2)
    # Test if the task object's attributes match expected values.
    def test_task_content(self):
        task = task_model.todo_tasks_objects.get(task="test");
        user        =f'{task.user_id}'
        task_title  =f'{task.task}'
        status      =f'{task.status}'
        description =f'{task.description}'
        deadline    =f'{task.deadline}'
        priority    =f'{task.priority}'

        # Assert that the attributes match the expected values.
        self.assertEqual(user,'test_user1')
        self.assertEqual(task_title,'test')
        self.assertEqual(status,'To Do')
        self.assertEqual(description,'TEST')
        self.assertEqual(deadline,'1/1/2024')
        self.assertEqual(priority,'High')
        self.assertEqual(str(task),'test')

