import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {ProductM} from "../../models/product-m";
import {ProductService} from "../../../product/services/product.service";
import {MatDialog} from "@angular/material/dialog";
import {DialogCreateProductComponent} from "../dialog-create-product/dialog-create-product.component";

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent implements OnInit {

  @Input()
  public searchTerm!: string;

  public product$!: Observable<ProductM[]>

  constructor(private productService: ProductService,
              public dialog: MatDialog,
              private product: ProductService) {

  }

  ngOnInit(): void {
    this.product$ = this.productService.getCollection();
  }

  refreshPage(){
    this.product$ = this.productService.getCollection();
  }

  editProduct(product: ProductM) {
    this.dialog.open(DialogCreateProductComponent, {
      width: '45%',
      data: product
    })
    this.refreshPage();
  }

  deleteProduct(id: number){
    let conf = confirm("Etes-vous sûr de vouloir le supprimer ? ");
    if (conf)
      this.product.deleteProduct(id)
        .subscribe({
          next: ()=>{
            alert("Le Produit a bien été supprimé")
          },
          error:()=>{
            alert("Erreur lors de la suppression du Produit")
          }})
    this.refreshPage();
  }
}
