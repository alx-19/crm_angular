import { Component, OnInit } from '@angular/core';
import {IconDefinition} from "@fortawesome/fontawesome-common-types";
import {faAddressCard} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-icon-customer',
  templateUrl: './icon-customer.component.html',
  styleUrls: ['./icon-customer.component.css']
})
export class IconCustomerComponent implements OnInit {

  public myIcon: IconDefinition = faAddressCard; // récupération de l'icon via fontawesone


  constructor() { }

  ngOnInit(): void {
  }

}
