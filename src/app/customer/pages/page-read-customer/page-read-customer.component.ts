import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-page-read-customer',
  templateUrl: './page-read-customer.component.html',
  styleUrls: ['./page-read-customer.component.css']
})
export class PageReadCustomerComponent implements OnInit {

  public titreHeader = "CLIENTS";

  constructor() { }

  ngOnInit(): void {
  }

}
