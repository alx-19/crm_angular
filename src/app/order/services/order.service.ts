import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

import {OrderM} from "../../shared/models/order-m";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private url: string = `${environment.apiUrl}/orders`;

  constructor(private httpClient: HttpClient) {

  }

  getItemById(id:number): Observable<OrderM>{
    return this.httpClient.get<OrderM>(this.url + '/' + id);
  }

  getCollection() : Observable<OrderM[]> {
    return this.httpClient.get<OrderM[]>(this.url);
  }

  deleteOrder(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.url + '/' + id);
  }

  putOrder(order: OrderM, id: 0): Observable<OrderM> {
    return this.httpClient.put<OrderM>(this.url + '/' +id, order);
  }

  postOrder(order : OrderM): Observable<void> {
    return this.httpClient.post<void>(this.url, order);
  }
}
