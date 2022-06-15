import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageListUsersComponent} from "./pages/page-list-users/page-list-users.component";
import {PageCreateUserComponent} from "./pages/page-create-user/page-create-user.component";
import {PageReadUserComponent} from "./pages/page-read-user/page-read-user.component";
import {PageUpdateUserComponent} from "./pages/page-update-user/page-update-user.component";

const routes: Routes = [
  {path: '', redirectTo: 'list', pathMatch :'full'},
  {path: 'list', component: PageListUsersComponent},
  {path: 'create', component: PageCreateUserComponent},
  {path: 'list/users/:id', component: PageReadUserComponent},
  {path: 'update', component: PageUpdateUserComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
