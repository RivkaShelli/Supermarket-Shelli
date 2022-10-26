import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/user.model';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { CartItem, CartModel } from '../../models/cart.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  @Input() userCart!: CartModel | null;
  @Input() userDetail!: UserModel | null;
  constructor(private cartService: CartService, private loginServiceService: LoginServiceService) { }

  ngOnInit(): void {
    this.loginServiceService.$user.subscribe(res => this.userDetail = res);
    this.cartService.$cart.subscribe(res => this.userCart = res);
  }
}
