import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutLoginComponent } from './components/layout-login/layout-login.component';
import { LayoutGeneralComponent } from './components/layout-general/layout-general.component';
import {TemplatesModule} from "../templates/templates.module";
import {SharedModule} from "../shared/shared.module";



@NgModule({
  declarations: [
    LayoutLoginComponent,
    LayoutGeneralComponent
  ],
  imports: [
    CommonModule,
    TemplatesModule,
    SharedModule
  ],
  exports:[
    LayoutLoginComponent,
    LayoutGeneralComponent
  ]
})
export class UiModule { }
