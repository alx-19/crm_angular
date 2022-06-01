import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.css']
})
export class PageListOrdersComponent implements OnInit {

  public titreHeader = "COMMANDES";

  constructor() { }

  ngOnInit(): void {
  }

}
