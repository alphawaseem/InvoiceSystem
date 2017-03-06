import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Customer } from './models/customer.model';
import 'rxjs/add/operator/map';

@Injectable()
export class CustomersService {

  private baseUrl = 'http://localhost:8000';
  constructor(private http: Http) {
  }

  getCustomers() {
    return this.http.get(`${this.baseUrl}/api/customers`).map(res => {
      return res.json();
    });
  }

  getCustomer(id) {
    return this.http.get(`${this.baseUrl}/api/customers/${id}`).map(res => {
      return res.json();
    });
  }

  editCustomer(id, newCustomerData) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(`${this.baseUrl}/api/customers/${id}`, newCustomerData).map(res => {
      return res.json();
    });
  }

  addCustomer(customer: Customer) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(`${this.baseUrl}/api/customers`, JSON.stringify(customer), {
      headers: headers
    }).map(res => {
      return res.json();
    });
  }

  deleteCustomer(id) {
    return this.http.delete(`${this.baseUrl}/api/customers/${id}`).map(res => res);
  }

}
