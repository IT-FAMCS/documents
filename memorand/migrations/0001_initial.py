# Generated by Django 5.0.2 on 2024-06-19 18:07

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Memorand',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('aud', models.TextField()),
                ('subject', models.TextField()),
                ('date_from', models.DateTimeField(default=datetime.datetime.now)),
                ('date_to', models.DateTimeField(default=datetime.datetime.now)),
            ],
        ),
    ]
