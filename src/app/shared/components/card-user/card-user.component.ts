import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {UserM} from "../../models/user-m";
import {UserService} from "../../../user/services/user.service";
import {MatDialog} from "@angular/material/dialog";
import {DialogCreateUserComponent} from "../dialog-create-user/dialog-create-user.component";

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.css']
})
export class CardUserComponent implements OnInit {

  @Input()
  public searchTerm!: string;

  public user$!: Observable<UserM[]>

  constructor(private userService: UserService,
              public dialog: MatDialog,
              private user: UserService) {
  }

  ngOnInit(): void {
    this.user$ = this.userService.getCollection();
  }

  refreshPage() {
    this.user$ = this.userService.getCollection();
  }

  editUser(user: UserM) {
    this.dialog.open(DialogCreateUserComponent, {
      width: '45%',
      data: user
    })
    this.refreshPage();
  }

  deleteUser(id: number) {
    let conf = confirm("Etes-vous certain de vouloir supprimer cet utilisateur ?");
    if (conf)
      this.user.deleteUser(id)
        .subscribe({
          next: () => {
            alert("L'utilisateur a bien été supprimé")
          },
          error: () => {
            alert("Erreur lors de le suppression de l'utilisateur")
          }
        })
    this.refreshPage();
  }
}
