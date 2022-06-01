import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {ProductM} from "../../models/product-m";
import {ProductService} from "../../../product/services/product.service";

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent implements OnInit {

  public product$!: Observable<ProductM[]>

  constructor(private productService: ProductService) {

  }

  ngOnInit(): void {
    this.product$ = this.productService.getCollection();
  }

}
