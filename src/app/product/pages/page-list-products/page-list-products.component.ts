import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {ProductM} from "../../../shared/models/product-m";
import {ProductService} from "../../services/product.service";
import {MatDialog} from "@angular/material/dialog";
import {
  DialogCreateProductComponent
} from "../../../shared/components/dialog-create-product/dialog-create-product.component";

@Component({
  selector: 'app-page-list-products',
  templateUrl: './page-list-products.component.html',
  styleUrls: ['./page-list-products.component.css']
})
export class PageListProductsComponent implements OnInit {

  public titreHeader = "PRODUITS";
  public searchTerm! : string;


  public product$!: Observable<ProductM[]>

  constructor(private product: ProductService,
              private dialog : MatDialog,) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  openDialogCreateCustomer() {
    this.dialog.open(DialogCreateProductComponent, {
      width: '45%'
    }).afterClosed().subscribe(value => {
      if(value == 'save'){
        this.getAllProducts();
      }
    })
  }

  getAllProducts(){
    this.product.getCollection()
      .subscribe({
        next : (res)=>{
          console.log(res);
        },
        error : () =>{
          alert("Erreur lors de la récupération des enregistrements")
        }
      })
  }

}
