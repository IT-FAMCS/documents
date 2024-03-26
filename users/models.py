from django.db import models
from django.contrib.auth.models import AbstractUser

class CustomUser(AbstractUser):
    emain = models.EmailField(unique=True)