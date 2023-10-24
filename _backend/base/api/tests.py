from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from ..models import task_model
from django.contrib.auth.models import User


#My first test :,) Careless 231019 23:02
class TaskTests(APITestCase):
    def test_view_posts(self):
        url=reverse('api:listcreate')
        response = self.client.get(url,format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)



