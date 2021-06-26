from django.db.models import (
    Model,
    CharField,
    TextField,
    DateTimeField
)


class PostsModel(Model):
    title = CharField(max_length=40)
    content = TextField()
    created_datetime = DateTimeField(auto_now_add=True)
