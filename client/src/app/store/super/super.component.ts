import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BehaviorSubject, tap } from 'rxjs';
import { loginResponseModel } from 'src/app/models/loginResponse.model';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { ProductsService } from 'src/app/services/products.service';
import { CartItem, CartItemResponse, CartModel } from '../../models/cart.model';
import { ProductModel } from '../../models/product.model';
import { CartService } from '../../services/cart.service';
import { ModalComponent } from '../modal/modal.component';


@Component({
  selector: 'app-super',
  templateUrl: './super.component.html',
  styleUrls: ['./super.component.css']
})
export class SuperComponent implements OnInit {
  productArr: ProductModel[] = [];
  user: loginResponseModel | null = null;
  cart!: CartModel;
  currentCategory$: BehaviorSubject<number> = new BehaviorSubject<number>(6);
  constructor(private cartService: CartService,
    private loginServiceService: LoginServiceService,
    private productsService: ProductsService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.productsService.productSubject$.subscribe(res => this.productArr = res);
    this.loginServiceService.$user.subscribe(res => this.user = res);
    this.productsService.getProductsByCategory(1);
    this.cartService.$cart.subscribe(c => this.cart = c) 
    this.loginServiceService.getUserDetail();
    this.cartService.getCartItems();
  }
  onCategoryClick(categoryId: number) {
    this.productsService.getProductsByCategory(categoryId);
  }
  AddProduct() {
    this.router.navigate(['addProduct']);
  }
}
