import { Component, Input, OnInit } from '@angular/core';
import { CartItem, CartItemResponse } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';
import { environment } from 'src/environments/environment';
import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() item: CartItemResponse | null = null;
  imageUrl: string = environment.serverImageUrl;
  totalPrice: number = 0;
  constructor(private cartService:CartService ) { }

  ngOnInit(): void {
  }
  onDeleteClick(item:CartItemResponse) {
    this.cartService.deleteItemFromCart(item.item_id,item.cart_id)
}

}
