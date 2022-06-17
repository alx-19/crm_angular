import { Component, OnInit } from '@angular/core';
import {IconDefinition} from "@fortawesome/fontawesome-common-types";
import {faTrash} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-icon-trash',
  templateUrl: './icon-trash.component.html',
  styleUrls: ['./icon-trash.component.css']
})
export class IconTrashComponent implements OnInit {

  public myIcon: IconDefinition = faTrash; // récupération de l'icon via fontawesone


  constructor() { }

  ngOnInit(): void {
  }

}
