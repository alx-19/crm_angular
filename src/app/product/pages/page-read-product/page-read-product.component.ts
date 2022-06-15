import { Component, OnInit } from '@angular/core';
import {ProductM} from "../../../shared/models/product-m";
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-page-read-product',
  templateUrl: './page-read-product.component.html',
  styleUrls: ['./page-read-product.component.css']
})
export class PageReadProductComponent implements OnInit {

  id:any;
  public titreHeader = "PRODUITS";
  data!: ProductM;


  constructor(private route: ActivatedRoute,
              private productService : ProductService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getItemById();
  }

  getItemById(){
    this.productService.getItemById(this.id).subscribe(data =>{
      this.data = data;
      console.log(this.data)
    })
  }
}
