import {Component, Input, OnInit} from '@angular/core';
import {UserModel} from '../../../models/user.model';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent implements OnInit {

  @Input()
  user: UserModel;

  constructor() { }

  ngOnInit(): void {
  }

}
