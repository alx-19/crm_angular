import { Component, OnInit } from '@angular/core';
import {IconDefinition} from "@fortawesome/fontawesome-common-types";
import {faUser} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-icon-user',
  templateUrl: './icon-user.component.html',
  styleUrls: ['./icon-user.component.css']
})
export class IconUserComponent implements OnInit {

  public myIcon: IconDefinition = faUser; // récupération de l'icon via fontawesone


  constructor() { }

  ngOnInit(): void {
  }

}
