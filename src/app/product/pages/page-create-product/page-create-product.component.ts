import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-create-product',
  templateUrl: './page-create-product.component.html',
  styleUrls: ['./page-create-product.component.css']
})
export class PageCreateProductComponent implements OnInit {

  public titreHeader = "PRODUITS";

  constructor() { }

  ngOnInit(): void {
  }

}
