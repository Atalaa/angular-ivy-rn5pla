import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../_shared/shared.module';
import { RouterModule, ROUTES } from '@angular/router';
import { UserViewComponent } from './user-view/user-view.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: AdminComponent,
      },
      {
        path: 'user/:id',
        component: UserViewComponent,
      },
    ]),
  ],
  declarations: [AdminComponent, UserFormComponent, UserListComponent],
})
export class AdminModule {}
