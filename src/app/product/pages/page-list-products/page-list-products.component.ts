import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {ProductM} from "../../../shared/models/product-m";
import {ProductService} from "../../services/product.service";
import {
  DialogCreateCustomerComponent
} from "../../../shared/components/dialog-create-customer/dialog-create-customer.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-page-list-products',
  templateUrl: './page-list-products.component.html',
  styleUrls: ['./page-list-products.component.css']
})
export class PageListProductsComponent implements OnInit {

  public titreHeader = "PRODUITS";

  public product$!: Observable<ProductM[]>

  constructor(private product: ProductService,
              private dialog : MatDialog,) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  openDialogCreateCustomer() {
    this.dialog.open(DialogCreateCustomerComponent, {
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
