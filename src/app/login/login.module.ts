import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageForgotPasswordComponent } from './pages/page-forgot-password/page-forgot-password.component';
import { PageResetPasswordComponent } from './pages/page-reset-password/page-reset-password.component';


@NgModule({
  declarations: [
    PageLoginComponent,
    PageForgotPasswordComponent,
    PageResetPasswordComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
