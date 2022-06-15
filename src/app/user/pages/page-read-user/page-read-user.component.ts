import { Component, OnInit } from '@angular/core';
import {UserM} from "../../../shared/models/user-m";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-page-read-user',
  templateUrl: './page-read-user.component.html',
  styleUrls: ['./page-read-user.component.css']
})
export class PageReadUserComponent implements OnInit {

  id:any;
  public titreHeader = "UTILISATEURS";
  data!: UserM ;

  constructor(private route: ActivatedRoute,
              private userService : UserService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getItemById();
  }

  getItemById(){
    this.userService.getItemById(this.id).subscribe(data =>{
      this.data = data;
      console.log(this.data);
    })
  }

}
