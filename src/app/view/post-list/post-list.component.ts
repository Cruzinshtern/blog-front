import { Component, OnInit } from '@angular/core';
import { PostApiService } from '../../shared/service/post-api.service';
import {PostModel} from '../../models/post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts: PostModel[] = [];

  constructor(
    private http: PostApiService,
  ) { }

  ngOnInit(): void {
    this.http.getAllPosts().subscribe(
      response => {
        this.posts = response;
      }
    );
  }

}
