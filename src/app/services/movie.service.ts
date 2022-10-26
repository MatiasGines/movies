import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
//4c00b49d
  private API_URL: string = 'http://www.omdbapi.com/?apikey=4c00b49d';

  constructor(private http: HttpClient) {}

    getMovies(searchTerm: string): Observable<any>{
      return this.http.get(`${this.API_URL}&s=${searchTerm}`);

    }
}
