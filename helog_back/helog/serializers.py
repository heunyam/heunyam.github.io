from rest_framework.serializers import ModelSerializer
from .models import PostsModel


class PostsSerializer(ModelSerializer):
    class Meta:
        model = PostsModel
        fields = '__all__'
