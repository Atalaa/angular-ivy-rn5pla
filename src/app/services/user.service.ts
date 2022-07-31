import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  // le service sera injectable dans tous les modules
  providedIn: 'root',
})
export class UserService {
  users: User[] = [];
  add(firstName: string, lastName: string) {
    this.users.push({
      firstName,
      lastName,
    });
  }

  getList() {
    return [...this.users];
  }
  constructor() {}
}
