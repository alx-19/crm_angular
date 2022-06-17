import { Component, OnInit } from '@angular/core';
import {IconDefinition} from "@fortawesome/fontawesome-common-types";
import {faClipboard} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-icon-order',
  templateUrl: './icon-order.component.html',
  styleUrls: ['./icon-order.component.css']
})
export class IconOrderComponent implements OnInit {

  public myIcon: IconDefinition = faClipboard; // récupération de l'icon via fontawesone

  constructor() { }

  ngOnInit(): void {
  }

}
