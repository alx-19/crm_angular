import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-list-products',
  templateUrl: './page-list-products.component.html',
  styleUrls: ['./page-list-products.component.css']
})
export class PageListProductsComponent implements OnInit {

  public titreHeader = "PRODUITS";

  constructor() { }

  ngOnInit(): void {
  }

}
