import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../../services/customer.service";
import {MatDialog} from '@angular/material/dialog';
import {
  DialogCreateCustomerComponent
} from "../../../shared/components/dialog-create-customer/dialog-create-customer.component";

@Component({
  selector: 'app-page-list-customers',
  templateUrl: './page-list-customers.component.html',
  styleUrls: ['./page-list-customers.component.css']
})
export class PageListCustomersComponent implements OnInit {

  public titreHeader = "CLIENTS"; // déclaration du titre
  public searchTerm! : string; //déclaration pour le champ de recherche

  constructor(private dialog : MatDialog, //permet d'utiliser Material Angular Dialog
              private customer : CustomerService ) { } // permet d'utiliser les CustomerServices

  ngOnInit(): void {

    this.getAllCustomers(); // charger l'ensemble des clients
  }

  //fonction pour ouvrir la fenetre modal permettant la création d'un client
  openDialogCreateCustomer() {
    //on appel l'ouverture du 'DialogCreateCustomerComponent' qui est la modal avec le questionnaire
    this.dialog.open(DialogCreateCustomerComponent, {
      width: '45%' // largeur de la modal
    }).afterClosed().subscribe(value => {
      if(value == 'save'){
        this.getAllCustomers(); // recharger l'ensemble des clients
      }
    })
  }

  //Fonction pour récuperer l'ensemble des clients
  getAllCustomers(){
    this.customer.getCollection() // récupération de l'ensemble des données
      .subscribe({
        next : (res)=>{
          console.log(res); // console.log pour vérifier en console la bonne récupération des données
        },
        //si cela ne fonctionne pas créer une alert pour signaler le soucis.
        error : () =>{
          alert("Erreur lors de la récupération des enregistrements")
    }
      })
  }
}
