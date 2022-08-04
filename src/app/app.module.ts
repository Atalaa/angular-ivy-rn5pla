import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { UserFormComponent } from './admin/user-form/user-form.component';
import { UserListComponent } from './admin/user-list/user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user.service';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [
    AppComponent,
    AdminComponent,
    UserFormComponent,
    UserListComponent,
  ],
  bootstrap: [AppComponent],
  providers: [UserService],
})
export class AppModule {}
