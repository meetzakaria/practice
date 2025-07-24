import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserFormComponent } from './user-component/user-form/user-form.component';
import { UserListComponent } from './user-component/user-list/user-list.component';
@NgModule({
  declarations: [AppComponent, UserFormComponent, UserListComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
