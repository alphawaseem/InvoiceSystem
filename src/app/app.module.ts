import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
  RouterModule,
  Routes
} from '@angular/router';

import { CustomersService } from './customers.service';
import { ProductsService } from './products.service';
import { InvoiceItemService, InvoicesService } from './invoices.service';

import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerComponent } from './customer/customer.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { InvoiceItemsComponent } from './invoice-items/invoice-items.component';
import { InvoiceItemComponent } from './invoice-item/invoice-item.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'customers/:id', component: CustomerComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/:id', component: ProductComponent },
  { path: 'invoices', component: InvoicesComponent },
  { path: 'invoices/:id', component: InvoiceComponent },
  { path: 'invoices/:id/items', component: InvoiceItemsCompnent },
  { path: 'invoices/:id/items/:id', component: InvoiceItemCompnent }

];

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    CustomerComponent,
    ProductsComponent,
    ProductComponent,
    InvoicesComponent,
    InvoiceComponent,
    InvoiceComponent,
    InvoiceItemsComponent,
    InvoiceItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CustomersService, ProductsService, InvoiceItemService, InvoicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
