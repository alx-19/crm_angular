import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageListProductsComponent} from "./pages/page-list-products/page-list-products.component";
import {PageCreateProductComponent} from "./pages/page-create-product/page-create-product.component";
import {PageReadProductComponent} from "./pages/page-read-product/page-read-product.component";
import {PageUpdateProductComponent} from "./pages/page-update-product/page-update-product.component";

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full'},
  { path: 'list', component: PageListProductsComponent},
  { path: 'create', component: PageCreateProductComponent},
  { path: 'read', component: PageReadProductComponent},
  { path: 'update', component: PageUpdateProductComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
