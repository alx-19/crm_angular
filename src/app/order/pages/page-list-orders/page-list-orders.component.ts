import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {OrderService} from "../../services/order.service";
import {DialogCreateOrderComponent} from "../../../shared/components/dialog-create-order/dialog-create-order.component";

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.css']
})
export class PageListOrdersComponent implements OnInit {

  public titreHeader = "COMMANDES"; // déclaration titre
  public searchTerm!: string; //d&claration pour champ de recherche

  constructor(private dialog : MatDialog, // permet d'utiliser angular Material dialog
              private order : OrderService) { // permet d'utiliser OrderService

  }

  ngOnInit(): void {
    this.getAllOrders(); //récupération de l'ensemble des commandes
  }

  //fonction d'ouverture de la fenetre dialog pour la création d'une commande
  openDialogCreateOrder() {
    this.dialog.open(DialogCreateOrderComponent,{ // Ouverture de la fenetre dialog via DialogCreateOrderComponent
      width: '45%' // largeur Modal
    }).afterClosed().subscribe(value => {
      if(value == 'save'){
        this.getAllOrders(); // rechargement de l'ensemble
      }
    })
  }

  // fonction de récupération de l'ensemble des Commandes
  getAllOrders(){
    this.order.getCollection() // récupération via getCollection() qui provient de OrderService
      .subscribe({
        next: (res) =>{
          console.log(res); // permet d'afficher dans la console la bonne récupération des données
        },
        error: () => {
          alert("Erreur lors de la récupération des enregistrements") // afficher une alert si problème de récupération de données
        }
      })
  }
}
