import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ProductCategorModel } from 'src/app/models/product-category.model';
import { ProductModel } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  categories: ProductCategorModel[] = [];
  constructor(private productsService: ProductsService, private router: Router) { }
  addForm!: FormGroup;
  ngOnInit(): void {
    this.productsService.categories$.subscribe(res => this.categories = res);
    this.addForm = new FormGroup({
      product_name: new FormControl(null, Validators.required),
      product_category: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required),
      image: new FormControl(null, Validators.required)
    })
  }
  addNewProduct() {
    this.productsService.addProduct({ ...this.addForm.value }).then(res => console.log(res))}
}
