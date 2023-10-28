from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager


class custom_account_manager_model(BaseUserManager):

    def create_superuser(self, email, user_name, first_name, password, **other_fields):

        other_fields.setdefault('is_staff', True)
        other_fields.setdefault('is_superuser', True)
        other_fields.setdefault('is_active', True)

        if other_fields.get('is_staff') is not True:
            raise ValueError(
                'Superuser must be assigned to is_staff=True.')
        if other_fields.get('is_superuser') is not True:
            raise ValueError(
                'Superuser must be assigned to is_superuser=True.')

        return self.create_user(email, user_name, first_name, password, **other_fields)

    def create_user(self, email, user_name, first_name, password, **other_fields):
        if not email:
            raise ValueError(_('You must provide an email address'))
        email = self.normalize_email(email)
        user = self.model(email=email, user_name=user_name, first_name=first_name, **other_fields)
        user.set_password(password)
        user.save()
        return user

#Changed the user_model that was originally in base.api
class new_user_model(AbstractBaseUser, PermissionsMixin):

    email = models.EmailField(_('email address'), unique=True)
    user_name = models.CharField(max_length=150, unique=True)
    first_name = models.CharField(max_length=150, blank=True)
    start_date = models.DateTimeField(default=timezone.now)
    about = models.TextField(_('about'), max_length=500, blank=True)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)

    # TODO Larry Level field
    # TODO Exp Counter field

    objects = custom_account_manager_model()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['user_name']

    # def levelcalculate (self):
    #     if (self.exp_counter >= self.LarryLevel*100):
    #         self.LarryLevel += 1
    #     elif (self.exp_counter < self.LarryLevel*100):
    #         self.LarryLevel -= 1
    #     else:
    #         self.LarryLevel 

    def __str__(self):
        return self.user_name
