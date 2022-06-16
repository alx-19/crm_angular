import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {OrderService} from "../../services/order.service";
import {DialogCreateOrderComponent} from "../../../shared/components/dialog-create-order/dialog-create-order.component";

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.css']
})
export class PageListOrdersComponent implements OnInit {

  public titreHeader = "COMMANDES";
  public searchTerm!: string;

  constructor(private dialog : MatDialog,
              private order : OrderService) { }

  ngOnInit(): void {
    this.getAllOrders();
  }

  openDialogCreateOrder() {
    this.dialog.open(DialogCreateOrderComponent,{
      width: '45%'
    }).afterClosed().subscribe(value => {
      if(value == 'save'){
        this.getAllOrders();
      }
    })
  }

  getAllOrders(){
    this.order.getCollection()
      .subscribe({
        next: (res) =>{
          console.log(res);
        },
        error: () => {
          alert("Erreur lors de la récupération des enregistrements")
        }
      })
  }
}
