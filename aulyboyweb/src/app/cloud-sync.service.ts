import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieDetail } from 'src/models/moviedetail';
import { User } from 'src/models/user';

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

  public Getuser() {
    return this.http.get<User[]>('https://localhost:5001/api/' + 'User/');
  }
}
