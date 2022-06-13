import { Component, OnInit } from '@angular/core';
import {CustomerM} from "../../models/customer-m";
import {ActivatedRoute} from "@angular/router";
import {CustomerService} from "../../../customer/services/customer.service";

@Component({
  selector: 'app-dialog-read-customer',
  templateUrl: './dialog-read-customer.component.html',
  styleUrls: ['./dialog-read-customer.component.css']
})
export class DialogReadCustomerComponent implements OnInit {

  id:any;
  data!: CustomerM ;

  constructor(private route: ActivatedRoute,
              private customerService : CustomerService) {

  }

  ngOnInit(): void {
    this.getItemById();
  }

  getItemById(){
    this.customerService.getItemById(this.id).subscribe(data=>{
      this.data = data;
      console.log(this.data)
    })
  }

}
