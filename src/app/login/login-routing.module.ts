import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageLoginComponent} from "./pages/page-login/page-login.component";
import {PageForgotPasswordComponent} from "./pages/page-forgot-password/page-forgot-password.component";
import {PageResetPasswordComponent} from "./pages/page-reset-password/page-reset-password.component";

const routes: Routes = [
  {path: '', redirectTo:'login', pathMatch: 'full'},
  {path: 'login', component: PageLoginComponent},
  {path: 'forgot', component: PageForgotPasswordComponent},
  {path: 'reset', component: PageResetPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
