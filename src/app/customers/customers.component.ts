import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../customers.service';
import { Customer } from '../models/customer.model';
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

  getCustomers(){
    this.cusService.getCustomers().subscribe(res => {
      this.customers = res;
    });
  }

}
