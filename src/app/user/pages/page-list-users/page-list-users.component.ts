import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-list-users',
  templateUrl: './page-list-users.component.html',
  styleUrls: ['./page-list-users.component.css']
})
export class PageListUsersComponent implements OnInit {

  public titreHeader = "UTILISATEURS";

  constructor() { }

  ngOnInit(): void {
  }

}
