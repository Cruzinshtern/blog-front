import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  isOpen = new BehaviorSubject(false);
  postId: string;

  constructor() { }

  openModal(id): void {
    this.postId = id;
    this.isOpen.next(!this.isOpen.getValue());
  }

  closeModal(): void {
    this.isOpen.next(!this.isOpen.getValue());
}
}
