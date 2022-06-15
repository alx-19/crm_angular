import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserM} from "../../shared/models/user-m";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string = `${environment.apiUrl}/users`;

  constructor(private httpClient: HttpClient) {

  }

  getItemById(id:number): Observable<UserM>{
    return this.httpClient.get<UserM>(this.url + '/' + id);
  }

  getCollection() : Observable<UserM[]> {
    return this.httpClient.get<UserM[]>(this.url);
  }

  deleteUser(id:number): Observable<void> {
    return this.httpClient.delete<void>(this.url + '/' +id);
  }

  putUser(user : UserM, id: number): Observable<UserM> {
    return this.httpClient.put<UserM>(this.url + '/' + id, user);
  }

  postUser(user : UserM): Observable<void> {
    return this.httpClient.post<void>(this.url, user);
  }
}
