import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {UserM} from "../../../shared/models/user-m";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-page-list-users',
  templateUrl: './page-list-users.component.html',
  styleUrls: ['./page-list-users.component.css']
})
export class PageListUsersComponent implements OnInit {

  public titreHeader = "UTILISATEURS";

  public user$!: Observable<UserM[]>

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.user$ = this.userService.getCollection();
  }

}
