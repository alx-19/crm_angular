import { Component, OnInit } from '@angular/core';
import {IconDefinition} from "@fortawesome/fontawesome-common-types";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-icon-magnifying-class',
  templateUrl: './icon-magnifying-class.component.html',
  styleUrls: ['./icon-magnifying-class.component.css']
})
export class IconMagnifyingClassComponent implements OnInit {

  public myIcon: IconDefinition = faMagnifyingGlass; // récupération de l'icon via fontawesone


  constructor() { }

  ngOnInit(): void {
  }

}
