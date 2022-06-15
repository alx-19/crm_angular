

import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../../services/customer.service";
import {MatDialog} from '@angular/material/dialog';
import {
  DialogCreateCustomerComponent
} from "../../../shared/components/dialog-create-customer/dialog-create-customer.component";

@Component({
  selector: 'app-page-list-customers',
  templateUrl: './page-list-customers.component.html',
  styleUrls: ['./page-list-customers.component.css']
})
export class PageListCustomersComponent implements OnInit {

  public titreHeader = "CLIENTS";
  public searchTerm! : string;


  constructor(private dialog : MatDialog,
              private customer : CustomerService) { }

  ngOnInit(): void {

    this.getAllCustomers();
  }


  openDialogCreateCustomer() {
    this.dialog.open(DialogCreateCustomerComponent, {
      width: '45%'
    }).afterClosed().subscribe(value => {
      if(value == 'save'){
        this.getAllCustomers();
      }
    })
  }

  getAllCustomers(){
    this.customer.getCollection()
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
