import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

export interface IUserForm {
  firstName: string;
  lastName: string;
}

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  @Output() submitted: EventEmitter<IUserForm> = new EventEmitter<IUserForm>();
  firstName: string = '';
  lastName: string = '';
  email: string = '';

  form = new FormGroup({
    first: new FormControl(),
    last: new FormControl(),
    email: new FormControl(),
  });

  constructor() {}

  ngOnInit() {}

  handleSubmit() {
    this.submitted.emit({
      firstName: this.firstName,
      lastName: this.lastName,
    });

    this.firstName = '';
    this.lastName = '';
  }
}
