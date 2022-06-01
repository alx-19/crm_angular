import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-create-user',
  templateUrl: './page-create-user.component.html',
  styleUrls: ['./page-create-user.component.css']
})
export class PageCreateUserComponent implements OnInit {

  public titreHeader = "UTILISATEURS";

  constructor() { }

  ngOnInit(): void {
  }

}
