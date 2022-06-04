import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutGeneralComponent } from './components/layout-general/layout-general.component';
import {TemplatesModule} from "../templates/templates.module";
import {SharedModule} from "../shared/shared.module";



@NgModule({
  declarations: [
    LayoutGeneralComponent
  ],
  imports: [
    CommonModule,
    TemplatesModule,
    SharedModule
  ],
  exports:[
    LayoutGeneralComponent
  ]
})
export class UiModule { }
