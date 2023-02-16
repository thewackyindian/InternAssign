# Create your models here.
from django.db import models

class Actor(models.Model):
    name = models.CharField(max_length=100)
    date_of_birth = models.DateField()
    
    def __str__(self):
        return self.name

class Movie(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    release_date = models.DateField()
    upvote = models.IntegerField()
    downvote = models.IntegerField()
    def __str__(self):
        return self.title
    
class ActorMovie(models.Model):
    actor = models.ForeignKey(Actor, on_delete=models.CASCADE)
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE)



