import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthService} from "../../../core/services/auth.service";

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css']
})
export class PageLoginComponent implements OnInit {

  pageLogin!: FormGroup;

  constructor(private router: Router,
              private authService: AuthService,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.pageLogin = this.fb.group({
      username: ['admin'],
      password: ['admin'],
    })
  }


  //fonction de connextion
  login(){
    this.authService.authenticate(this.pageLogin.get('username')?.value, this.pageLogin.get('password')?.value) //authentification via username et password
      .subscribe(() => this.router.navigate(['/breizhouse/home'])); //route vers laquelle l'utilisateur se dirige
  }
}
