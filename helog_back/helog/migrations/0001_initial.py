# Generated by Django 3.2.4 on 2021-06-28 14:16

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='PostsModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=40)),
                ('subTitle', models.CharField(max_length=200, null=True)),
                ('link', models.CharField(max_length=200)),
                ('created_datetime', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
