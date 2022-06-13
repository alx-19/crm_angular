import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import {Observable} from "rxjs";
import {CustomerM} from "../../models/customer-m";
import {CustomerService} from "../../../customer/services/customer.service";
import {CardCustomerModalComponent} from "../card-customer-modal/card-customer-modal.component";
import {DialogCreateCustomerComponent} from "../dialog-create-customer/dialog-create-customer.component";



@Component({
  selector: 'app-card-customer',
  templateUrl: './card-customer.component.html',
  styleUrls: ['./card-customer.component.css']
})
export class CardCustomerComponent implements OnInit {


  public customer$!: Observable<CustomerM[]>

  constructor(private customerService: CustomerService,
              public dialog: MatDialog,
              private customer: CustomerService) {

  }

  ngOnInit(): void {
    this.customer$ = this.customerService.getCollection();

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CardCustomerModalComponent, {});

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });


  }

  editCustomer(customer: CustomerM) {
    this.dialog.open(DialogCreateCustomerComponent, {
      width: '45%',
      data: customer
    })
  }

  deleteCustomer(id: number){
    this.customer.deleteCustomer(id)
      .subscribe({
        next: ()=>{
          alert("Le Client a bien été supprimé")
        },
        error:()=>{
          alert("Erreur lors de la suppression du CLient")
        }})
  }
}
