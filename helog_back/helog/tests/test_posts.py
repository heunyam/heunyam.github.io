from django.test import TestCase
from django.urls import resolve
from helog.urls import PostsAPI


class Test(TestCase):

    def test_url_resolves_to_posts_view(self):
        found = resolve('/posts')
        self.assertEqual(found, PostsAPI)
