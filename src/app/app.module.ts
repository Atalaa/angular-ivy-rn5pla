import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { UserFormComponent } from './admin/user-form/user-form.component';
import { UserListComponent } from './admin/user-list/user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ModelDirective } from './_shared/model.directive';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';

// const appRoutes: Routes = [
//   {
//     path: '',
//     redirectTo: '/admin',
//     pathMatch: 'full',
//     component: AdminComponent,
//   },
//   {
//     path: 'admin',
//     component: AdminComponent,
//   },
// ];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'admin',
        component: AdminComponent,
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
    ]),
  ],
  declarations: [
    AppComponent,
    AdminComponent,
    UserFormComponent,
    UserListComponent,
    ModelDirective,
    DashboardComponent,
  ],
  // exports: [RouterModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
