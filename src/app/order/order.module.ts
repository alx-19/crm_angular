import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { PageCreateOrderComponent } from './pages/page-create-order/page-create-order.component';
import { PageListOrdersComponent } from './pages/page-list-orders/page-list-orders.component';
import { PageReadOrderComponent } from './pages/page-read-order/page-read-order.component';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    PageCreateOrderComponent,
    PageListOrdersComponent,
    PageReadOrderComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    SharedModule
  ]
})
export class OrderModule { }
