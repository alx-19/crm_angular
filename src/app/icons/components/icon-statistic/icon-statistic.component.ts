import { Component, OnInit } from '@angular/core';
import {IconDefinition} from "@fortawesome/fontawesome-common-types";
import {faArrowUpRightDots} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-icon-statistic',
  templateUrl: './icon-statistic.component.html',
  styleUrls: ['./icon-statistic.component.css']
})
export class IconStatisticComponent implements OnInit {

  public myIcon: IconDefinition = faArrowUpRightDots;

  constructor() { }

  ngOnInit(): void {
  }

}
