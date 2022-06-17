import { Component, OnInit } from '@angular/core';
import {IconDefinition} from "@fortawesome/fontawesome-common-types";
import {faArrowRotateLeft} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-icon-previous-page',
  templateUrl: './icon-previous-page.component.html',
  styleUrls: ['./icon-previous-page.component.css']
})
export class IconPreviousPageComponent implements OnInit {

  public myIcon: IconDefinition = faArrowRotateLeft; // récupération de l'icon via fontawesone


  constructor() { }

  ngOnInit(): void {
  }

}
