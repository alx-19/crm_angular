import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductM} from "../../shared/models/product-m";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url: string = `${environment.apiUrl}/products`;

  constructor(private httpClient: HttpClient) {

  }

  getItemById(id: number): Observable<ProductM> {
    return this.httpClient.get<ProductM>(this.url + '/' + id);
  }

  getCollection(): Observable<ProductM[]> {
    return this.httpClient.get<ProductM[]>(this.url);
  }

  deleteProduct(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.url + '/' + id);
  }

  putProduct(product: ProductM, id: number): Observable<ProductM> {
    return this.httpClient.put<ProductM>(this.url + '/' + id, product);
  }

  postProduct(product: ProductM): Observable<void> {
    return this.httpClient.post<void>(this.url, product);
  }
}
