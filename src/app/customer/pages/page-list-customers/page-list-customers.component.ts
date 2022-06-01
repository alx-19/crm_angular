import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-list-customers',
  templateUrl: './page-list-customers.component.html',
  styleUrls: ['./page-list-customers.component.css']
})
export class PageListCustomersComponent implements OnInit {

  public titreHeader = "CLIENTS";

  constructor() { }

  ngOnInit(): void {
  }

}
