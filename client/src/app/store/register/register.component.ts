import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { UserModel } from '../../models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  
  constructor(private loginService: LoginServiceService, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      first_name: new FormControl(null, Validators.required),
      last_name: new FormControl(null, Validators.required),
      user_id: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      city: new FormControl(null),
      street: new FormControl(null),
    })
  }
  signIn() {
    this.loginService.register(this.registerForm.value);

  }

}
