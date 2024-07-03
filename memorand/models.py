from django.db import models
import datetime

class Memorand(models.Model):
    aud = models.TextField()
    subject = models.TextField()
    
    date_from = models.DateTimeField(default=datetime.datetime.now)
    date_to = models.DateTimeField(default=datetime.datetime.now)