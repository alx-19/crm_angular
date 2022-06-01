import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-read-product',
  templateUrl: './page-read-product.component.html',
  styleUrls: ['./page-read-product.component.css']
})
export class PageReadProductComponent implements OnInit {

  public titreHeader = "PRODUITS";

  constructor() { }

  ngOnInit(): void {
  }

}
