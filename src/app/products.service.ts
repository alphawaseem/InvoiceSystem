import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Product } from './models/product.model';

@Injectable()
export class ProductsService {

  private baseUrl = 'http://localhost:8000/api/products';
  constructor(private http: Http) {
  }

  getProducts() {
    return this.http.get(`${this.baseUrl}`).map(res => {
      return res.json();
    });
  }

  getProduct(id) {
    return this.http.get(`${this.baseUrl}/${id}`).map(res => {
      return res.json();
    });
  }

  editProduct(id, newCustomerData) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(`${this.baseUrl}/${id}`, newCustomerData).map(res => {
      return res.json();
    });
  }

  addProduct(customer: Product) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(`${this.baseUrl}`, JSON.stringify(customer), {
      headers: headers
    }).map(res => {
      return res.json();
    });
  }

  deleteProduct(id) {
    return this.http.delete(`${this.baseUrl}/${id}`).map(res => res);
  }

}
