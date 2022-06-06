import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {UserM} from "../../models/user-m";
import {UserService} from "../../../user/services/user.service";

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.css']
})
export class CardUserComponent implements OnInit {

  public user$!: Observable<UserM[]>

  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.user$ = this.userService.getCollection();
  }

}
