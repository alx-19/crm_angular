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
import { IconMagnifyingClassComponent } from './components/icon-magnifying-class/icon-magnifying-class.component';
import { IconSquarePenComponent } from './components/icon-square-pen/icon-square-pen.component';
import { IconTrashComponent } from './components/icon-trash/icon-trash.component';
import { IconSquarePlusComponent } from './components/icon-square-plus/icon-square-plus.component';
import { IconChevronDownComponent } from './components/icon-chevron-down/icon-chevron-down.component';
import { IconComebackComponent } from './components/icon-comeback/icon-comeback.component';
import {IconPreviousPageComponent} from "./components/icon-previous-page/icon-previous-page.component";


@NgModule({
  declarations: [
    IconHomeComponent,
    IconCustomerComponent,
    IconOrderComponent,
    IconProductComponent,
    IconStatisticComponent,
    IconUserComponent,
    IconLogOutComponent,
    IconMagnifyingClassComponent,
    IconSquarePenComponent,
    IconTrashComponent,
    IconSquarePlusComponent,
    IconChevronDownComponent,
    IconComebackComponent,
    IconPreviousPageComponent
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
    IconLogOutComponent,
    IconMagnifyingClassComponent,
    IconSquarePenComponent,
    IconTrashComponent,
    IconSquarePlusComponent,
    IconChevronDownComponent,
    IconComebackComponent,
    IconPreviousPageComponent
  ]
})
export class IconsModule { }
