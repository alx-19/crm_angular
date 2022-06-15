import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { PageListProductsComponent } from './pages/page-list-products/page-list-products.component';
import { PageReadProductComponent } from './pages/page-read-product/page-read-product.component';
import {SharedModule} from "../shared/shared.module";
import {IconsModule} from "../icons/icons.module";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    PageListProductsComponent,
    PageReadProductComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule,
    IconsModule,
    MatButtonModule
  ]
})
export class ProductModule { }
