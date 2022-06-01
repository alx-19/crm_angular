import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {CustomerM} from "../../models/customer-m";
import {CustomerService} from "../../../customer/services/customer.service";

@Component({
  selector: 'app-card-customer',
  templateUrl: './card-customer.component.html',
  styleUrls: ['./card-customer.component.css']
})
export class CardCustomerComponent implements OnInit {

  public customer$!: Observable<CustomerM[]>

  constructor(private customerService : CustomerService) {

  }

  ngOnInit(): void {
    this.customer$ = this.customerService.getCollection();
  }

}
