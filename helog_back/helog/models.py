from django.db.models import (
    Model,
    CharField,
    DateTimeField
)


class PostsModel(Model):
    title = CharField(max_length=40, null=False)
    subTitle = CharField(max_length=200, null=True)
    link = CharField(max_length=200, null=False)
    created_datetime = DateTimeField(auto_now_add=True)
