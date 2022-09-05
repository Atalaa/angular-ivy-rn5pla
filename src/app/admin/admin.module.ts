import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../_shared/shared.module';

@NgModule({
  imports: [CommonModule, SharedModule, FormsModule],
  declarations: [AdminComponent, UserFormComponent, UserListComponent],
  exports: [AdminComponent, UserFormComponent, UserListComponent],
})
export class AdminModule {}
