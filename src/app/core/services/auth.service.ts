import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, tap} from "rxjs";
import {UserM} from "../../shared/models/user-m";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private connectedUser$: BehaviorSubject<UserM>;

  constructor(private http: HttpClient) {
    const userInStorage = localStorage.getItem('user');
    this.connectedUser$ = new BehaviorSubject<UserM>(userInStorage ? JSON.parse(userInStorage) : null);
  }

  public getCurrentUser$(): Observable<UserM> {
    return this.connectedUser$.asObservable();
  }

  public authenticate(username: string, password: string): Observable<UserM> {
    const headers = new HttpHeaders({
      authorization: 'Basic ' + btoa(username + ':' + password)
    });

    const params = new HttpParams().set('username', username).set('password', password);

    console.log(params);


    return this.http.get<UserM>('/api/v1/users/login', {headers, params})
      .pipe(
        tap(user => {
          localStorage.setItem('user', JSON.stringify(user))
        })
      );
  }
}
