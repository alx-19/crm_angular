import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LogoComponent} from './components/logo/logo.component';
import {NavMenuComponent} from './components/nav-menu/nav-menu.component';
import {IconsModule} from "../icons/icons.module";
import {RouterModule} from "@angular/router";
import {NavProfilMenuComponent} from './components/nav-profil-menu/nav-profil-menu.component';
import {HeaderComponent} from './components/header/header.component';
import {CardCustomerComponent} from './components/card-customer/card-customer.component';
import {CardProductComponent} from './components/card-product/card-product.component';
import {CardUserComponent} from './components/card-user/card-user.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {DialogCreateCustomerComponent} from './components/dialog-create-customer/dialog-create-customer.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DialogReadCustomerComponent} from './components/dialog-read-customer/dialog-read-customer.component';
import {DialogCreateProductComponent} from './components/dialog-create-product/dialog-create-product.component';
import {DialogCreateUserComponent} from './components/dialog-create-user/dialog-create-user.component';
import {Ng2SearchPipe, Ng2SearchPipeModule} from "ng2-search-filter";
import {TableOrderComponent} from "./components/table-order/table-order.component";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {DialogCreateOrderComponent} from "./components/dialog-create-order/dialog-create-order.component";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatSortModule} from "@angular/material/sort";


@NgModule({
  declarations: [
    LogoComponent,
    NavMenuComponent,
    NavProfilMenuComponent,
    HeaderComponent,
    CardCustomerComponent,
    CardProductComponent,
    CardUserComponent,
    DialogCreateCustomerComponent,
    DialogReadCustomerComponent,
    DialogCreateProductComponent,
    DialogCreateUserComponent,
    TableOrderComponent,
    DialogCreateOrderComponent
  ],
  exports: [
    LogoComponent,
    NavMenuComponent,
    NavProfilMenuComponent,
    HeaderComponent,
    CardCustomerComponent,
    CardProductComponent,
    CardUserComponent,
    DialogCreateCustomerComponent,
    TableOrderComponent,
    DialogCreateOrderComponent
  ],
  imports: [
    CommonModule,
    IconsModule,
    RouterModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    MatPaginatorModule,
    MatTableModule,
    MatDatepickerModule,
    Ng2SearchPipeModule,
    MatSortModule
  ],
  providers: [
    Ng2SearchPipe
  ]

})
export class SharedModule {
}
