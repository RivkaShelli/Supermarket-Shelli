import { Component, Input, OnInit } from '@angular/core';
import { CartItemResponse, CartModel } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-order-cart',
  templateUrl: './order-cart.component.html',
  styleUrls: ['./order-cart.component.css']
})
export class OrderCartComponent implements OnInit {
  cart: any;
  @Input() cartitems!: CartItemResponse[];
  imageUrl: string = environment.serverImageUrl;
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    console.log(this.cartitems);
    
  
    
  }

}
