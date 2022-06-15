import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageListCustomersComponent} from "./pages/page-list-customers/page-list-customers.component";
import {PageReadCustomerComponent} from "./pages/page-read-customer/page-read-customer.component";

const routes: Routes = [
  {path: '', redirectTo: 'list', pathMatch:'full'},
  {path: 'list', component: PageListCustomersComponent},
  {path: 'list/customers/:id', component: PageReadCustomerComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
