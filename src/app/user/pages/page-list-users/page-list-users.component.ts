import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {UserM} from "../../../shared/models/user-m";
import {UserService} from "../../services/user.service";
import {MatDialog} from "@angular/material/dialog";
import {DialogCreateUserComponent} from "../../../shared/components/dialog-create-user/dialog-create-user.component";

@Component({
  selector: 'app-page-list-users',
  templateUrl: './page-list-users.component.html',
  styleUrls: ['./page-list-users.component.css']
})
export class PageListUsersComponent implements OnInit {

  public titreHeader = "UTILISATEURS";

  public user$!: Observable<UserM[]>

  constructor(private user: UserService,
              private dialog: MatDialog ) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  openDialogCreateUser() {
    this.dialog.open(DialogCreateUserComponent, {
      width: '45%'
    }).afterClosed().subscribe(value => {
      if(value == 'save'){
        this.getAllUsers();
      }
    })
  }

  getAllUsers(){
    this.user.getCollection()
      .subscribe({
        next : (res)=>{
          console.log(res);
        },
        error : () =>{
          alert("Erreur lors de la récupération des enregistrements")
        }
      })
  }
}
