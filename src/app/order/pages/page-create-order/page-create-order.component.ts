import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-create-order',
  templateUrl: './page-create-order.component.html',
  styleUrls: ['./page-create-order.component.css']
})
export class PageCreateOrderComponent implements OnInit {

  public titreHeader = "COMMANDES";

  constructor() { }

  ngOnInit(): void {
  }

}
