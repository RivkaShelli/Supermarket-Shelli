import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartItem, CartItemResponse, CartModel } from 'src/app/models/cart.model';
import { ProductModel } from '../../models/product.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  opened = false;
  @Input() cart!: CartModel 
  constructor(private cartService: CartService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  orderNow() {
    this.router.navigate(['order']);
  }
}
