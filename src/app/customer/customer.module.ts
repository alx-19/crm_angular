import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { PageListCustomersComponent } from './pages/page-list-customers/page-list-customers.component';
import { PageReadCustomerComponent } from './pages/page-read-customer/page-read-customer.component';
import {SharedModule} from "../shared/shared.module";
import {IconsModule} from "../icons/icons.module";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    PageListCustomersComponent,
    PageReadCustomerComponent,
  ],
    imports: [
        CommonModule,
        CustomerRoutingModule,
        SharedModule,
        IconsModule,
        MatButtonModule
    ]
})
export class CustomerModule { }
