import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Invoice, InvoiceItem } from './models/invoice.model';
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
@Injectable()
export class InvoiceItemService {

  private baseUrl = 'http:localhost:8000/api/invoices';
  constructor(private http: Http) { }
  getInvoiceItems(invoice_id) {
    return this.http.get(`${this.baseUrl}/${invoice_id}`).map(res => res.json());
  }
  addInvoiceItem(invoice_id, invoiceItem: InvoiceItem) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(`${this.baseUrl}/${invoice_id}`, JSON.stringify(invoiceItem), {
      headers: headers
    }).map(res => res.json());

  }
  getInvoiceItem(invoice_id, invoicItem_id) {
    return this.http.get(`${this.baseUrl}/${invoice_id}/${invoicItem_id}`).map(res => res.json());
  }
  editInvoiceItem(invoice_id, invoiceItem_id, invoiceItem: InvoiceItem) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(`${this.baseUrl}/${invoice_id}/${invoiceItem_id}`, invoiceItem, {
      headers: headers
    }).map(res => res.json());
  }
  deleteInvoiceItem(invoice_id, invoiceItem_id) {
    return this.http.delete(`${this.baseUrl}/${invoice_id}/${invoiceItem_id}`).map(res => res.json());
  }

}
