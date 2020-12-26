import {Component, Input, OnInit} from '@angular/core';
import { ModalService } from '../../shared/service/modal.service';
import { PostApiService } from '../../shared/service/post-api.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-post-modal',
  templateUrl: './post-modal.component.html',
  styleUrls: ['./post-modal.component.scss']
})
export class PostModalComponent implements OnInit {

  open: boolean;
  post;


  constructor(
    private modalService: ModalService,
    // private http: PostApiService,
    // // private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.modalService.isOpen.subscribe(
      isOpen => {
        this.open = isOpen;

        if (this.open) {
          this.post = this.modalService.post;
        }
      }
    );
  }

  toClose(): void {
    this.modalService.closeModal();
  }
}
