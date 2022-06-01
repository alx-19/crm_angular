import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {CustomerM} from "../../../shared/models/customer-m";
import {CustomerService} from "../../services/customer.service";

@Component({
  selector: 'app-page-list-customers',
  templateUrl: './page-list-customers.component.html',
  styleUrls: ['./page-list-customers.component.css']
})
export class PageListCustomersComponent implements OnInit {

  public titreHeader = "CLIENTS";

  public customer$!: Observable<CustomerM[]>

  constructor(private customerService : CustomerService) { }

  ngOnInit(): void {
    this.customer$ = this.customerService.getCollection();
  }

}
