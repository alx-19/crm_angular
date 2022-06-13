import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CustomerM} from "../../shared/models/customer-m";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private url: string = `${environment.apiUrl}/customers`;

  constructor(private httpClient: HttpClient) {

  }

  getItemById(id:number): Observable<CustomerM>{
    return this.httpClient.get<CustomerM>(this.url + '/' + id);
  }

  getCollection() : Observable<CustomerM[]> {
    return this.httpClient.get<CustomerM[]>(this.url);
  }

  deleteCustomer(id:number): Observable<void> {
    return this.httpClient.delete<void>(this.url + '/' +id);
  }

  putCustomer(customer: CustomerM, id: 0): Observable<CustomerM> {
    return this.httpClient.put<CustomerM>(this.url + '/' +id, customer);
  }

  postCustomer(customer : CustomerM): Observable<void> {
    return this.httpClient.post<void>(this.url, customer);
  }
}
