import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CustomerService} from "../../services/customer.service";
import {CustomerM} from "../../../shared/models/customer-m";


@Component({
  selector: 'app-page-read-customer',
  templateUrl: './page-read-customer.component.html',
  styleUrls: ['./page-read-customer.component.css']
})
export class PageReadCustomerComponent implements OnInit {

  id:any;
  public titreHeader = "CLIENTS";
  data!: CustomerM ;

  constructor(private route: ActivatedRoute,
              private customerService : CustomerService) {

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']; // permet de savoir sur quel id nous sommes
    this.getItemById(); //recherche par ID
  }

  // fonction pour obtenir un client par son ID
  getItemById(){
  this.customerService.getItemById(this.id).subscribe(data=>{
    this.data = data;
    console.log(this.data);
  })
  }
}
