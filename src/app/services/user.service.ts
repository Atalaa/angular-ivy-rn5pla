import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
  // le service sera injectable dans tous les modules
  providedIn: 'root',
})
export class UserService {
  firstName: string = '';
  lastName: string = '';

  constructor(private httpClient: HttpClient) {}

  add(firstName: string, lastName: string) {}

  //return whole array
  getList(): Observable<User[]> {
    const users$: Observable<User[]> = this.httpClient.get<User[]>(
      'http://localhost:3000/users'
    );
    // throw new Error('This is an error getList');
    return users$;
  }
}
