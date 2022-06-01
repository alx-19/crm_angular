import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    PageHomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
