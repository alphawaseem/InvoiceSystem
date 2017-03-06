import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Invoice } from './models/invoice.model';
@Injectable()
export class InvoicesService {

  private baseUrl = 'http:localhost:8000/api/invoices';
  constructor(private http: Http) { }

  getInvoices() {
    return this.http.get(`${this.baseUrl}`).map(res => res.json());
  }
  addInvoice(invoice: Invoice) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(`${this.baseUrl}`, JSON.stringify(invoice), {
      headers: headers
    }).map(res => res.json());

  }
  getInvoice(id) {
    return this.http.get(`${this.baseUrl}/${id}`).map(res => res.json());
  }
  editInvoice(id, invoice: Invoice) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(`${this.baseUrl}/${id}`, invoice, {
      headers: headers
    }).map(res => res.json());
  }
  deleteInvoice(id) {
    return this.http.delete(`${this.baseUrl}/${id}`).map(res => res.json());
  }

}

