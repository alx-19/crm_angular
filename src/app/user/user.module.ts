import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { PageCreateUserComponent } from './pages/page-create-user/page-create-user.component';
import { PageListUsersComponent } from './pages/page-list-users/page-list-users.component';
import { PageReadUserComponent } from './pages/page-read-user/page-read-user.component';
import { PageUpdateUserComponent } from './pages/page-update-user/page-update-user.component';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    PageCreateUserComponent,
    PageListUsersComponent,
    PageReadUserComponent,
    PageUpdateUserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ]
})
export class UserModule { }
