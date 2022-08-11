import { Component, OnInit, VERSION } from '@angular/core';
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

  constructor(private userService: UserService) {
    this.userService.getList().subscribe({
      next: (userss: User[]) => {
        console.log(userss);
        this.users = userss;
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('Completed');
      },
    });
  }

  ngOnInit() {}

  addUser(user: IUserForm): void {
    this.userService.add(user.firstName, user.lastName);
    //mets a jour ma liste locale users
    // this.users = this.userService.getList();
  }
}

/*Promises
    const fetchAuthor = fetch('http://localhost:3000/posts/2');
    fetchAuthor
      .then((response) => response.json())
      .then((data) => (this.name = data.author));
    */
