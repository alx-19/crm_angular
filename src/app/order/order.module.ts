import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { PageListOrdersComponent } from './pages/page-list-orders/page-list-orders.component';
import { PageReadOrderComponent } from './pages/page-read-order/page-read-order.component';
import {SharedModule} from "../shared/shared.module";
import {IconsModule} from "../icons/icons.module";


@NgModule({
  declarations: [
    PageListOrdersComponent,
    PageReadOrderComponent
  ],
    imports: [
        CommonModule,
        OrderRoutingModule,
        SharedModule,
        IconsModule
    ]
})
export class OrderModule { }
