import { Component, OnInit } from '@angular/core';
import {IconDefinition} from "@fortawesome/fontawesome-common-types";
import {faRotateLeft} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-icon-comeback',
  templateUrl: './icon-comeback.component.html',
  styleUrls: ['./icon-comeback.component.css']
})
export class IconComebackComponent implements OnInit {

  public myIcon: IconDefinition = faRotateLeft; // récupération de l'icon via fontawesone

  constructor() { }

  ngOnInit(): void {
  }

}
