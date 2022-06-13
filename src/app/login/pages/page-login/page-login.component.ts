import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css']
})
export class PageLoginComponent implements OnInit {

  pageLogin!: FormGroup;

  constructor(private router: Router,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.pageLogin = this.fb.group({
      username: ['admin'],
      password: ['admin'],
    })
  }


  login(){
    console.log('Donnée du formulaire...', this.pageLogin?.value);

    this.router.navigate(['/breizhouse/home']);
  }
}
