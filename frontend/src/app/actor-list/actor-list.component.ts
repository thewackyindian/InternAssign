import { Component, OnInit } from '@angular/core';
import { Actor } from '../models/actor.model';
import { ActorService } from '../connecting-.service';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.css']
})
export class ActorListComponent implements OnInit {
  actors: Actor[];

  constructor(private actorService: ActorService) {
    // this.movies = Movie[];
  }

  ngOnInit(): void {
    // this.movieService.getMovies().subscribe((data) => {
    //   this.movies = data.movies;
    // })
    // setTimeout(() => {
    //   console.log("settimout");
    //   console.log(this.movies);
    // }, 5000);
    this.actorService.getActors().subscribe((actors: any) => this.actors = actors.actors);
  }
}
