import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostApiService {

  posts: any = [
    {
      id: '1',
      post_title: 'Post Title',
      post_text: 'Some desc of my thoughts',
      author: 'Bogdan'
    },
    {
      id: '2',
      post_title: 'Other title',
      post_text: 'Some desc',
      author: 'Bogdan'
    },
    {
      id: '3',
      post_title: 'Environment',
      post_text: 'bad stuff',
      author: 'Timmy'
    },
    {
      id: '4',
      post_title: 'Global warming',
      post_text: 'Some desc of global warming',
      author: 'Johny'
    },
    {
      id: '5',
      post_title: 'Starvation',
      post_text: 'Some desc of starvation',
      author: 'Bogdan'
    }
  ]

  constructor() { }

  getAllPosts(): Observable<any> {
    return of(this.posts);
  }

  getOnePost(): Observable<any> {
    return of(this.posts[0]);
  }

}
