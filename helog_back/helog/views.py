from rest_framework import (
    views,
    serializers,
    status,
)
from rest_framework.response import Response
from helog.models import PostsModel


class PostsAPI(views.APIView):

    class PostsSerializer(serializers.ModelSerializer):
        class Meta:
            model = PostsModel
            fields = (
                'title',
                'subTitle',
                'link',
                'created_datetime'
            )
            read_only_fields = ('created_datetime',)

    def post(self, request):
        serializer = self.PostsSerializer(data=request.data)
        if not serializer.is_valid():
            return Response(serializer.errors, status.HTTP_400_BAD_REQUEST)

        serializer.save()

        return Response(serializer.data, status.HTTP_201_CREATED)
