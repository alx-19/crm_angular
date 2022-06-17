import { Component, OnInit } from '@angular/core';
import {IconDefinition} from "@fortawesome/fontawesome-common-types";
import {faBoxArchive} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-icon-product',
  templateUrl: './icon-product.component.html',
  styleUrls: ['./icon-product.component.css']
})
export class IconProductComponent implements OnInit {

  public myIcon: IconDefinition = faBoxArchive; // récupération de l'icon via fontawesone


  constructor() { }

  ngOnInit(): void {
  }

}
