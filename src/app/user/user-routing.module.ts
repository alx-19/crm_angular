import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageListUsersComponent} from "./pages/page-list-users/page-list-users.component";
import {PageReadUserComponent} from "./pages/page-read-user/page-read-user.component";

const routes: Routes = [
  {path: '', redirectTo: 'list', pathMatch :'full'},
  {path: 'list', component: PageListUsersComponent},
  {path: 'list/users/:id', component: PageReadUserComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
