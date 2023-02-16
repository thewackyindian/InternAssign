from django.urls import path
from .views import movie_list, actor_list, vote
from django.views.decorators.csrf import csrf_exempt
urlpatterns = [
    path('api/movies/', movie_list, name='movie-list'),
    path('api/actors/', actor_list, name='actor-list'),
    path('api/movies/<int:movie_id>/downvote/', csrf_exempt(vote), name='vote'),
    path('api/movies/<int:movie_id>/upvote/', csrf_exempt(vote), name='vote'),
]
