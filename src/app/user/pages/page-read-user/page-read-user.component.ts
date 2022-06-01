import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-read-user',
  templateUrl: './page-read-user.component.html',
  styleUrls: ['./page-read-user.component.css']
})
export class PageReadUserComponent implements OnInit {

  public titreHeader = "UTILISATEURS";

  constructor() { }

  ngOnInit(): void {
  }

}
