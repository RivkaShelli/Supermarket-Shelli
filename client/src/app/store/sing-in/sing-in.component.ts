import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { CartItemResponse, CartModel} from 'src/app/models/cart.model';
import { UserModel } from 'src/app/models/user.model';
import { CartService } from 'src/app/services/cart.service';
import { LoginServiceService } from 'src/app/services/login-service.service';


@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css']
})
export class SingInComponent implements OnInit {
  orderCount = 0;
  productsCount: number = 0;
  cart!: CartModel | null;
  userDetail!: UserModel | null;
  constructor(private router: Router,
    private cartService: CartService,
    private loginServiceService: LoginServiceService,
  ) { }

  ngOnInit(): void {
    this.loginServiceService.$user.subscribe(res => {
      if (res && res.role === 1) {
        this.router.navigate(['/store'])
      }
      if (res !== null)
        this.userDetail = res; 
      else
        this.userDetail=null
    })
   
    
    this.cartService.$cart.pipe(take(2)).subscribe(cart => this.cart = cart);
    this.loginServiceService.getUserDetail();
    this.cartService.getCartItems();
  }

}
