import { Component, OnInit } from '@angular/core';
import {IconDefinition} from "@fortawesome/fontawesome-common-types";
import {faPowerOff} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-icon-log-out',
  templateUrl: './icon-log-out.component.html',
  styleUrls: ['./icon-log-out.component.css']
})
export class IconLogOutComponent implements OnInit {

  public myIcon: IconDefinition = faPowerOff; // récupération de l'icon via fontawesone


  constructor() { }

  ngOnInit(): void {
  }

}
