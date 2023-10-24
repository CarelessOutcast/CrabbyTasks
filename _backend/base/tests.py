from django.test import TestCase
from django.contrib.auth.models import User
from .models import task_model

# Create your tests here.
class Test_Create_Post(TestCase):
    # @classmethod
    # def test_setUpTestData(cls):
    #     test_user1= User.objects.create_user(username="test_user1",password="123456789")
    #     test_task=task_model.objects.create(user_id=1,
    #                                         status='To Do',
    #                                         task="test",
    #                                         description="TEST",
    #                                         deadline="1/1/2024",
    #                                         priority=2)
    # def test_task_content(self):
    #     task = task_model.todo_tasks_objects.get(task="test");
    #     user        =f'{task.user_id}'
    #     task_title  =f'{task.task}'
    #     status      =f'{task.status}'
    #     description =f'{task.description}'
    #     deadline    =f'{task.deadline}'
    #     priority    =f'{task.priority}'
    #     self.assertEqual(user,'test_user1')
    #     self.assertEqual(task_title,'test')
    #     self.assertEqual(status,'To Do')
    #     self.assertEqual(description,'TEST')
    #     self.assertEqual(deadline,'1/1/2024')
    #     self.assertEqual(priority,'High')
    #     self.assertEqual(str(task),'test')
    pass #comment out if uncommenting tests: Def need to clean this up
