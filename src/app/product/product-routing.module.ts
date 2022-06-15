import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageListProductsComponent} from "./pages/page-list-products/page-list-products.component";
import {PageReadProductComponent} from "./pages/page-read-product/page-read-product.component";

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full'},
  { path: 'list', component: PageListProductsComponent},
  { path: 'list/products/:id', component: PageReadProductComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
