import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-read-order',
  templateUrl: './page-read-order.component.html',
  styleUrls: ['./page-read-order.component.css']
})
export class PageReadOrderComponent implements OnInit {

  public titreHeader = "COMMANDES";

  constructor() { }

  ngOnInit(): void {
  }

}
