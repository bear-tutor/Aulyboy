import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieDetail } from 'src/models/moviedetail';

@Injectable({
  providedIn: 'root'
})
export class CloudSyncService {

  constructor(private http: HttpClient) {
    console.log("hey");

  }

  public moviesDetail() {
    return this.http.get<MovieDetail[]>('https://localhost:5001/api/' + 'Movie/');
  }
}
