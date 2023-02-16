import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private url = 'http://127.0.0.1:8000/api/movies/';
  // private url2 = 'http://127.0.0.1:8000/api/actors/';
  constructor(private http: HttpClient) { }

  getMovies(): Observable<any> {
    return this.http.get<any>(this.url);
  }

  // getActors(): Observable<any> {
  //   return this.http.get<any>(this.url);
  // }

  // REST_API: string = 'http://127.0.0.1:8000/api/movies/';

  // httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  // constructor(private httpClient: HttpClient) { }

  // getMovies(): Observable<any> {
  //   let API_URL = this.REST_API;
  //   return this.httpClient.get(API_URL, { headers: this.httpHeaders })
  //     .pipe(map((res: any) => {
  //       console.log("data")
  //       console.log(res);
  //       return res || {}
  //     }),
  //       catchError(this.handleError)
  //     )
  // }

  // handleError(error: HttpErrorResponse): Observable<any> {
  //   let errorMessage = '';
  //   if (error.error instanceof ErrorEvent) {
  //     errorMessage = error.error.message;
  //   } else {
  //     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  //   }
  //   console.log(errorMessage);
  //   return throwError(errorMessage);
  // }
}
