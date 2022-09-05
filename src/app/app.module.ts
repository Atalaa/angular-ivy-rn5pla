import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { UserFormComponent } from './admin/user-form/user-form.component';
import { UserListComponent } from './admin/user-list/user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminModule } from './admin/admin.module';
import { SharedModule } from './_shared/shared.module';

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,

    // loadChildren: () =>
    //   import('./admin/admin.module').then((module) => module.AdminModule),
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    RouterModule.forRoot(appRoutes),
    AdminModule,
  ],
  declarations: [
    AppComponent,
    AdminComponent,
    UserFormComponent,
    UserListComponent,
    DashboardComponent,
    LoginComponent,
  ],
  // exports: [RouterModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
