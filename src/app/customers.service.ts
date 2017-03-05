import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CustomersService {

  private baseUrl = 'http://localhost:8000' ;
  constructor(private http: Http) {
    console.log('Hello CustomersService');
   }

  getCustomers() {
    return this.http.get(`${this.baseUrl}/api/customers`).map(res => {
      return res.json();
    });
  }

}
