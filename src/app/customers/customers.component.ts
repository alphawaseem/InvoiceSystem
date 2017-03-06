import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../customers.service';
import { Customer } from '../models/customer.model';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {



  private customers: Customer[];
  constructor(private cusService: CustomersService) { }

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers() {
    this.cusService.getCustomers().subscribe(res => {
      this.customers = res;
    });
  }

  addCustomer(customer: Customer) {
    console.log(customer);
    this.cusService.addCustomer(customer).subscribe(res=>{
      console.log('Added',res);
    });
    this.getCustomers();
  }

}
