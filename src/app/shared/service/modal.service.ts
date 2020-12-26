import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  isOpen = new BehaviorSubject(false);
  post;

  constructor() { }

  openModal(post): void {
    this.post = post;
    this.isOpen.next(!this.isOpen.getValue());
  }

  closeModal(): void {
    this.isOpen.next(!this.isOpen.getValue());
}
}
