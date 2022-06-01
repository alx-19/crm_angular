import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { IconHomeComponent } from './components/icon-home/icon-home.component';
import { IconCustomerComponent } from './components/icon-customer/icon-customer.component';
import { IconOrderComponent } from './components/icon-order/icon-order.component';
import { IconProductComponent } from './components/icon-product/icon-product.component';
import { IconStatisticComponent } from './components/icon-statistic/icon-statistic.component';
import { IconUserComponent } from './components/icon-user/icon-user.component';
import { IconLogOutComponent } from './components/icon-log-out/icon-log-out.component';


@NgModule({
  declarations: [
    IconHomeComponent,
    IconCustomerComponent,
    IconOrderComponent,
    IconProductComponent,
    IconStatisticComponent,
    IconUserComponent,
    IconLogOutComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
    exports: [
        IconHomeComponent,
        IconCustomerComponent,
        IconOrderComponent,
        IconProductComponent,
        IconStatisticComponent,
        IconUserComponent,
        IconLogOutComponent
    ]
})
export class IconsModule { }
