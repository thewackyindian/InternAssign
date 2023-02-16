import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../models/movie.model';
import { MovieService } from '../connecting.service';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { faSortUp, faSortDown, faS } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
  
export class MovieListComponent implements OnInit {
  uu = faSortUp;
  dd = faSortDown;
  movies: Movie[];
  // movies [{
  //   id:1,
  //   title: "test",
  //   description: "testing",
  //   release_date: null,
  //   num_actors: 5
  // }];
  private url = 'http://127.0.0.1:8000';
  constructor(private movieService: MovieService,
    private route: ActivatedRoute,
    private http: HttpClient,
    
    ) {
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
    // console.log("hello");
    this.movieService.getMovies().subscribe((movies: any) => this.movies = movies.movies);

  }
  sortMovies(field: string, ascending: boolean) {
    // copy the movies array to avoid mutating the original data
    let sortedMovies = this.movies.slice();
    // sort the movies array based on the selected field
    sortedMovies.sort((a, b) => {
      if (a[field as keyof Movie] < b[field as keyof Movie]) {
        return ascending ? -1 : 1;
      }
      if (a[field as keyof Movie] > b[field as keyof Movie]) {
        return ascending ? 1 : -1;
      }
      return 0;
    });
    this.movies = sortedMovies;
  }
  getCookie(name: string) {
    const cookieValue = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
    return cookieValue ? cookieValue.pop() : '';
  }
  upvote(movie : Movie) {
    
    const url1 = this.url + `/api/movies/${movie['id']}/upvote/`;
    

    const headers = new HttpHeaders({
      'X-CSRFToken': this.getCookie('csrftoken') as string
    });
    const options = { headers, withCredentials: true };
    this.http.post(url1, {type:"upvote"}, options).subscribe(response => {
      console.log(response);
      movie.upvotes += 1;
    });
  }
  downvote(movie : Movie) {
    const url1 = this.url + `/api/movies/${movie['id']}/downvote/`;
    const headers = new HttpHeaders({
      'X-CSRFToken': this.getCookie('csrftoken') as string,
    });
    const options = {  headers,withCredentials: true };
    this.http.post(url1, {type : "downvote"}, options).subscribe(response => {
      console.log(response);
      movie.downvotes += 1;
    });
  }
}
