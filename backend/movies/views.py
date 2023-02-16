from django.shortcuts import render
from django.http import JsonResponse
from .models import Movie, Actor, ActorMovie
import json

def movie_list(request):
    # sort = request.GET.get('sort')
    # if sort == 'title':
    #     movies = Movie.objects.order_by('title')
    # elif sort == 'release_date':
    #     movies = Movie.objects.order_by('release_date')
    # else:
    movies = Movie.objects.all()

    movie_list = []
    
    for movie in movies:
        print(movie)
        movie_list.append({
            'id': movie.id,
            'title': movie.title,
            'description': movie.description,
            'release_date': movie.release_date,
            'num_actors': ActorMovie.objects.filter(movie=movie).count(),
            'upvotes': movie.upvote,
            'downvotes': movie.downvote
        })
    print(movie_list)
    return JsonResponse({'movies': movie_list})

def actor_list(request):
    print(request)
    actors = Actor.objects.all()
    actor_list = []
    for actor in actors:
        actor_list.append({
            'name': actor.name,
            'date_of_birth': actor.date_of_birth,
            'num_movies': ActorMovie.objects.filter(actor=actor).count(),
        })
    # print(actor_list)/
    return JsonResponse({'actors': actor_list})

def vote(request, movie_id):
    movie = Movie.objects.get(id=movie_id)

    body = json.loads(request.body.decode('utf-8'))
    # print(body);
    if body['type'] == 'upvote':
        movie.upvote += 1
        movie.save()
        return JsonResponse({'success': True, 'upvotes': movie.upvote})
    elif body['type'] == 'downvote':
        movie.downvote += 1
        movie.save()
        return JsonResponse({'success': True, 'upvotes': movie.downvote})
    else:
        message = 'No vote submitted'
    return JsonResponse({'message': message})
