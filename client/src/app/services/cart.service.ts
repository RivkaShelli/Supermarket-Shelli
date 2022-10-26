import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, lastValueFrom } from 'rxjs';
import { CartItem, CartModel } from '../models/cart.model';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private $cartObject = new BehaviorSubject<CartModel | any>('');
  private $totalPriceObject = new BehaviorSubject<number>(0);
  private $cartId = new BehaviorSubject<number>(0);


  constructor(private httpclient: HttpClient) { }
  get $cart() {
    return this.$cartObject.asObservable();
  }
  get $totalPrice() {
    return this.$totalPriceObject.asObservable();
  }
  get cartId$() { return this.$cartId.asObservable() }
  createNewCart(){
    return lastValueFrom(this.httpclient.post<any>('/api/cart', null))
  }
  getCart() {
    return lastValueFrom(this.httpclient.get<CartModel>(`/api/cart`)).then(cart => {
      this.$cartObject.next(cart);
    }).catch(err => {
      if (err.error == 'no cart found') {
        this.createNewCart().then(()=>this.getCartItems())   
      } else {
        console.log(err)
      }
    })
  }

  async getCartItems() {
    return lastValueFrom(this.httpclient.get<CartModel>(`/api/cart`)).then(cart =>this.$cartObject.next(cart))}
  async addItem(item: CartItem) {
    return lastValueFrom(this.httpclient.post('/api/cart/addItem', item, { responseType: 'text' })).then(() => this.getCartItems()).catch(err => console.log(err.message));
  }
  async deleteItemFromCart(itemId: number, cartId: number) {
    return lastValueFrom(this.httpclient.delete(`/api/cart/${cartId}/${itemId}`)).then(() => this.getCartItems()).catch(err => console.log(err.message));
  }


}
