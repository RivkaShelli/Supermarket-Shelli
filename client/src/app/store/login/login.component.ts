import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { CartService } from 'src/app/services/cart.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  
  constructor(private loginService: LoginServiceService, private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null,Validators.required),
      password: new FormControl(null, Validators.required)
    })
  }
  login() {
    this.loginService.login(this.loginForm.value).then(() => {
      this.loginService.getUserDetail();
      this.cartService.getCart().then(res => console.log(res));
    })
  }

}
