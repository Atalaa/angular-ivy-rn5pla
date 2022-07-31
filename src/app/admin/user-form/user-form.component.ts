import { Component, EventEmitter, OnInit, Output } from '@angular/core';

export interface IUserUserForm {
  firstName: string;
  lastName: string;
}

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  @Output() submitted: EventEmitter<IUserUserForm> =
    new EventEmitter<IUserUserForm>();
  firstName = '';
  lastName = '';

  constructor() {}

  ngOnInit() {}

  handleSubmit() {
    this.submitted.emit({
      firstName: this.firstName,
      lastName: this.lastName,
    });
  }
}
