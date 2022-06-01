import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {ProductM} from "../../../shared/models/product-m";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-page-list-products',
  templateUrl: './page-list-products.component.html',
  styleUrls: ['./page-list-products.component.css']
})
export class PageListProductsComponent implements OnInit {

  public titreHeader = "PRODUITS";

  public product$!: Observable<ProductM[]>

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.product$ = this.productService.getCollection();
  }

}
