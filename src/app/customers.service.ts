import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Customer } from './models/customer.model';
import 'rxjs/add/operator/map';

@Injectable()
export class CustomersService {

  private baseUrl = 'http://localhost:8000/api/customers';
  constructor(private http: Http) {
  }

  getCustomers() {
    return this.http.get(`${this.baseUrl}`).map(res => {
      return res.json();
    });
  }

  getCustomer(id) {
    return this.http.get(`${this.baseUrl}/${id}`).map(res => {
      return res.json();
    });
  }

  editCustomer(id, newCustomerData) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(`${this.baseUrl}/${id}`, newCustomerData).map(res => {
      return res.json();
    });
  }

  addCustomer(customer: Customer) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(`${this.baseUrl}`, JSON.stringify(customer), {
      headers: headers
    }).map(res => {
      return res.json();
    });
  }

  deleteCustomer(id) {
    return this.http.delete(`${this.baseUrl}/${id}`).map(res => res);
  }

}
