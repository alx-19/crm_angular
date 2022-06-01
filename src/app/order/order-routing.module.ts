import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageListOrdersComponent} from "./pages/page-list-orders/page-list-orders.component";
import {PageCreateOrderComponent} from "./pages/page-create-order/page-create-order.component";
import {PageReadOrderComponent} from "./pages/page-read-order/page-read-order.component";

const routes: Routes = [
  {path:'', redirectTo:'list', pathMatch: 'full'},
  {path:'list', component: PageListOrdersComponent},
  {path:'create', component: PageCreateOrderComponent},
  {path:'read', component: PageReadOrderComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
