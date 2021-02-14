import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostApiService {

  BASIC_POSTS_URL = environment.API + '/posts';

  constructor(
    private http: HttpClient
  ) { }

  getAllPosts(): Observable<any> {
    return this.http.get(this.BASIC_POSTS_URL);
  }

  getOnePost(id): Observable<any> {
    const endpoint = `/${id}`;
    return this.http.get(this.BASIC_POSTS_URL + endpoint);
  }

}
