import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatisticRoutingModule } from './statistic-routing.module';
import { PageStatisticComponent } from './pages/page-statistic/page-statistic.component';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    PageStatisticComponent
  ],
  imports: [
    CommonModule,
    StatisticRoutingModule,
    SharedModule
  ]
})
export class StatisticModule { }
