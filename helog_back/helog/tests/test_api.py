from django.test import TestCase, Client
from django.utils import timezone


class PostingTest(TestCase):

    def setUp(self) -> None:
        self.client = Client()

    def tearDown(self) -> None:
        pass

    def test_posting_request(self):
        response = self.client.post('/posts/', {
            'title': '제목',
            'subtitle': '소제목',
            'content': '내용',
            'created_datetime': timezone.now()
        })

        self.assertEqual(response.status_code, 200)
