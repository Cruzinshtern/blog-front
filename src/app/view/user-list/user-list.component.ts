import { Component, OnInit } from '@angular/core';
import {UsersApiService} from '../../shared/service/users-api.service';
import {UserModel} from '../../models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: UserModel[] = [];

  constructor(private usersApiService: UsersApiService) { }

  ngOnInit(): void {
    this.usersApiService.getAllUsers().subscribe(
      response => {
        this.users = response;
      }
    )
  }

}
