from rest_framework import (
    views,
    serializers,
    status
)
from helog.models import PostsModel


class PostsAPI(views.APIView):

    class PostsSerializer(serializers.ModelSerializer):
        class Meta:
            model = PostsModel
            fields = (
                'title',
                'content',
                'created_datetime'
            )

    def get(self, request):
        serializer = self.PostsSerializer(data=request.data)



    def post(self, request):
        return Response({
            'ok': True
        })
