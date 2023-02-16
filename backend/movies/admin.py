

# Register your models here.
from django.contrib import admin
from .models import Movie, Actor, ActorMovie

admin.site.register(Movie)
admin.site.register(Actor)
admin.site.register(ActorMovie)
