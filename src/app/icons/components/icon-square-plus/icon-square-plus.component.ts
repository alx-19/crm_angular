import { Component, OnInit } from '@angular/core';
import {IconDefinition} from "@fortawesome/fontawesome-common-types";
import {faSquarePlus} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-icon-square-plus',
  templateUrl: './icon-square-plus.component.html',
  styleUrls: ['./icon-square-plus.component.css']
})
export class IconSquarePlusComponent implements OnInit {

  public myIcon: IconDefinition = faSquarePlus;

  constructor() { }

  ngOnInit(): void {
  }

}
