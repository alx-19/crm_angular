import { Component, OnInit } from '@angular/core';
import {IconDefinition} from "@fortawesome/fontawesome-common-types";
import {faSquarePen} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-icon-square-pen',
  templateUrl: './icon-square-pen.component.html',
  styleUrls: ['./icon-square-pen.component.css']
})
export class IconSquarePenComponent implements OnInit {

  public myIcon: IconDefinition = faSquarePen;

  constructor() { }

  ngOnInit(): void {
  }

}
