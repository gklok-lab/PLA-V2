import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUsersComponent } from './list-users/list-users.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [
    ListUsersComponent,
    ViewUserComponent,
    
  ],
  imports: [
    CommonModule,
    MatListModule,
    
  
  ]
})
export class UsersModule { }
