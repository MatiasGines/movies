import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiResponse } from '../interfaces/apiResponse';
import { Movie } from '../interfaces/movies';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
//4c00b49d
  private API_URL: string = 'http://www.omdbapi.com/?apikey=4c00b49d';

  constructor(private http: HttpClient) {}

    getMovies(searchTerm: string): Observable<Movie[]>{
      return this.http.get<ApiResponse>(`${this.API_URL}&s=${searchTerm}`).pipe(
        map(response =>{
          return response.Search;
        })
      );

    }
}
