import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {UserM} from "../../models/user-m";
import {UserService} from "../../../user/services/user.service";

@Component({
  selector: 'app-nav-profil-menu',
  templateUrl: './nav-profil-menu.component.html',
  styleUrls: ['./nav-profil-menu.component.css']
})
export class NavProfilMenuComponent implements OnInit {

  public user$!: Observable<UserM[]>;

  constructor(private user: UserService) {

  }

  ngOnInit(): void {
    this.user$ = this.user.getCollection();
  }

}
