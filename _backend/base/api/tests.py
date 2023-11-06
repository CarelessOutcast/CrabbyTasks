################################################################################
# This 'tests.py' file defines test cases for the API views related to tasks in
# the 'base' app. It uses Django's test framework to test the API endpoints.
################################################################################

from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from ..models import task_model
from django.contrib.auth.models import User


# Test case class for API views related to tasks.
# My first test :,) Careless 231019 23:02
class TaskTests(APITestCase):
    def test_view_posts(self):
        # Define the URL for the API endpoint.
        url=reverse('api:listcreate')

        # Send a GET request to the API endpoint.
        response = self.client.get(url,format='json')

        # Check if the response status code is HTTP 200 OK.
        self.assertEqual(response.status_code, status.HTTP_200_OK)
