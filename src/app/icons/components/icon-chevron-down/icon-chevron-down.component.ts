import { Component, OnInit } from '@angular/core';
import {IconDefinition} from "@fortawesome/fontawesome-common-types";
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-icon-chevron-down',
  templateUrl: './icon-chevron-down.component.html',
  styleUrls: ['./icon-chevron-down.component.css']
})
export class IconChevronDownComponent implements OnInit {

  public myIcon: IconDefinition = faChevronDown;

  constructor() { }

  ngOnInit(): void {
  }

}
