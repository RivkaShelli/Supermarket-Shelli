import { Component, OnInit } from '@angular/core';
import { CartItemResponse, CartModel } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  cart!: CartModel;
  cartItems!: CartItemResponse[];
  cartId!: number;
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.$cart.subscribe(res => {
      this.cart = res;
      if (this.cart) {
        this.cartItems = this.cart?.cartItems;
        this.cartId = res?.cartId
      }
    })
      this.cartService.getCartItems()
  }



}


