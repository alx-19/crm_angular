import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { PageCreateCustomerComponent } from './pages/page-create-customer/page-create-customer.component';
import { PageListCustomersComponent } from './pages/page-list-customers/page-list-customers.component';
import { PageReadCustomerComponent } from './pages/page-read-customer/page-read-customer.component';
import { PageUpdateCustomerComponent } from './pages/page-update-customer/page-update-customer.component';
import {SharedModule} from "../shared/shared.module";
import {IconsModule} from "../icons/icons.module";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    PageCreateCustomerComponent,
    PageListCustomersComponent,
    PageReadCustomerComponent,
    PageUpdateCustomerComponent
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
