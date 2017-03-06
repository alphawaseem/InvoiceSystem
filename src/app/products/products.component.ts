import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../models/product.model';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  private products: Product[];
  constructor(private prodService: ProductsService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.prodService.getProducts().subscribe(res => {
      this.products = res;
    });
  }

  getProduct(id) {
    this.prodService.getProduct(id).subscribe(res => {
      console.log(res);
    });
  }

  editProduct(id, product) {
    this.prodService.editProduct(id, product).subscribe(res => {
      console.log('Updated ', res);
      this.getProducts();
    });
  }

  deleteProduct(id) {
    this.prodService.deleteProduct(id).subscribe(res => {
      console.log('Deleted ', res);
      this.getProducts();
    });
  }
  addProduct(product: Product) {
    console.log(product);
    this.prodService.addProduct(product).subscribe(res => {
      console.log('Added', res);
    });
    this.getProducts();
  }
}
