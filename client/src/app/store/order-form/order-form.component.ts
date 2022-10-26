import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartItemResponse, CartModel } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {
  newOrder: boolean = false;
  ordetForm!: FormGroup;
  @Input() cartId!: number;
  @Input() totalPrice!: any;
  cities: string[] = ['Jerusalem', 'Tel-Aviv', 'Beer-Sheva', 'Beit-Shemes', 'Netivot', 'Ramat-Gan', 'Ashdod', 'Tverya']
  constructor(private orderService: OrderService,
    private cartService: CartService,
    private loginServiceService: LoginServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.ordetForm = new FormGroup({
      cart_id: new FormControl(this.cartId, Validators.required),
      total_price: new FormControl(this.totalPrice, Validators.required),
      city: new FormControl(null, Validators.required),
      street: new FormControl(null, Validators.required),
      shipping_date: new FormControl(null, Validators.required),
      order_date: new FormControl(new Date(), Validators.required),
      digits: new FormControl(null, Validators.required),
    })
   
    
  }

  order() {
    this.orderService.newOrder(this.ordetForm.value).then(res => {
      console.log(res);
      this.newOrder = true;
    })
  }
  finish() {
    this.loginServiceService.clearStorage();
    this.router.navigate(['/']);
  }
  new() {
    this.cartService.getCart().then(() => this.router.navigate(['store']))
  }

}