import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { PageListUsersComponent } from './pages/page-list-users/page-list-users.component';
import { PageReadUserComponent } from './pages/page-read-user/page-read-user.component';
import {SharedModule} from "../shared/shared.module";
import {IconsModule} from "../icons/icons.module";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    PageListUsersComponent,
    PageReadUserComponent,
  ],
    imports: [
        CommonModule,
        UserRoutingModule,
        SharedModule,
        IconsModule,
        MatButtonModule
    ]
})
export class UserModule { }
