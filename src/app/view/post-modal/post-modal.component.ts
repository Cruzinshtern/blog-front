import {Component, Input, OnInit} from '@angular/core';
import { ModalService } from '../../shared/service/modal.service';
import { PostApiService } from '../../shared/service/post-api.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {PostModel} from '../../models/post.model';

@Component({
  selector: 'app-post-modal',
  templateUrl: './post-modal.component.html',
  styleUrls: ['./post-modal.component.scss']
})
export class PostModalComponent implements OnInit {

  open: boolean;
  post: PostModel;


  constructor(
    private modalService: ModalService,
    private postApiService: PostApiService
  ) { }

  ngOnInit(): void {
    this.modalService.isOpen.subscribe(
      isOpen => {
        this.open = isOpen;

        if (this.open) {
          // console.log('THISPOST', this.post)
          this.postApiService.getOnePost(this.modalService.postId).subscribe(
            response => {
              this.post = response;
              console.log(this.post);

            }
          )
        }
      }
    );
  }

  toClose(): void {
    this.modalService.closeModal();
  }
}
