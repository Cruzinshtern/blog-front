import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {ModalService} from '../../../shared/service/modal.service';
import {PostModel} from '../../../models/post.model';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {


  @Input() post: PostModel;
  @Output() selectedPost = new EventEmitter();

  constructor(
    private modalService: ModalService
  ) { }

  ngOnInit(): void {
  }

  onClick(): void {
    // this.selectedPost.emit(post);
    this.modalService.openModal(this.post.id);
  }


}
