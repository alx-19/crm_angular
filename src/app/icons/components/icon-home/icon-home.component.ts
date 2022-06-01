import { Component, OnInit } from '@angular/core';
import {faHome} from "@fortawesome/free-solid-svg-icons";
import {IconDefinition} from '@fortawesome/fontawesome-common-types';

@Component({
  selector: 'app-icon-home',
  templateUrl: './icon-home.component.html',
  styleUrls: ['./icon-home.component.css']
})
export class IconHomeComponent implements OnInit {

  public myIcon: IconDefinition = faHome;
  constructor() { }

  ngOnInit(): void {
  }

}
