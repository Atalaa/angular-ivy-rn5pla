import { Component, OnInit } from '@angular/core';
import { User } from '../services/user.model';
import { UserService } from '../services/user.service';
import { IUserForm } from './user-form/user-form.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  users: User[] = [];
  constructor(private userService: UserService) {}

  ngOnInit() {}

  addUser(user: IUserForm): void {
    this.userService.add(user.firstName, user.lastName);
    //mets a jour ma liste locale users
    this.users = this.userService.getList();
  }
}
