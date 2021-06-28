from django.urls import path
from helog.views import PostsAPI


urlpatterns = [
    path(r'posts', PostsAPI.as_view())
]
