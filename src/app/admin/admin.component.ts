import { Component, OnInit } from '@angular/core';
import { User } from '../services/user.model';
import { UserService } from '../services/user.service';
import { IUserUserForm } from './user-form/user-form.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  users: User[] = [];
  constructor(private userService: UserService) {}

  ngOnInit() {}

  addUser(user: IUserUserForm) {
    this.userService.add(user.firstName, user.lastName);
    this.users = this.userService.getList();
  }
}
