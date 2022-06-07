import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { PageCreateProductComponent } from './pages/page-create-product/page-create-product.component';
import { PageListProductsComponent } from './pages/page-list-products/page-list-products.component';
import { PageReadProductComponent } from './pages/page-read-product/page-read-product.component';
import { PageUpdateProductComponent } from './pages/page-update-product/page-update-product.component';
import {SharedModule} from "../shared/shared.module";
import {IconsModule} from "../icons/icons.module";


@NgModule({
  declarations: [
    PageCreateProductComponent,
    PageListProductsComponent,
    PageReadProductComponent,
    PageUpdateProductComponent
  ],
    imports: [
        CommonModule,
        ProductRoutingModule,
        SharedModule,
        IconsModule
    ]
})
export class ProductModule { }
