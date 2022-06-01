import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageListCustomersComponent} from "./pages/page-list-customers/page-list-customers.component";
import {PageCreateCustomerComponent} from "./pages/page-create-customer/page-create-customer.component";
import {PageReadCustomerComponent} from "./pages/page-read-customer/page-read-customer.component";
import {PageUpdateCustomerComponent} from "./pages/page-update-customer/page-update-customer.component";

const routes: Routes = [
  {path: '', redirectTo: 'list', pathMatch:'full'},
  {path: 'list', component: PageListCustomersComponent},
  {path: 'create', component: PageCreateCustomerComponent},
  {path: 'read', component: PageReadCustomerComponent},
  {path: 'update', component: PageUpdateCustomerComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
