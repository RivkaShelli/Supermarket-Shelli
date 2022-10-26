import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, firstValueFrom, lastValueFrom, Observable, tap } from 'rxjs';
import { loginResponseModel } from '../models/loginResponse.model';

import { UserModel } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
private $userDetail: BehaviorSubject<any | null> = new BehaviorSubject<any | null>(null);
  get $user() { return this.$userDetail.asObservable()}
 constructor(private httpclient: HttpClient, private router: Router) { }
 async login(user: object) {
    return firstValueFrom(this.httpclient.post<loginResponseModel>('/api/login', user)).then(user => {
      sessionStorage.setItem('jwt', user.token);
    }).catch((err) => {
      alert('invalid password or username!!');
      console.log(err.message)
    })
     
  }
  register(userDetail: UserModel) {
    return lastValueFrom(this.httpclient.post('/api/register', userDetail))
      .then(() => this.router.navigate(['']))
      .catch(err => {
        alert('username allready exsist');
        console.log(err.message);
        
      })
  }
  clearStorage() {
    this.$userDetail.next(null);
    window.sessionStorage.removeItem("jwt");
    

  }
async getUserDetail() {
    return lastValueFrom(this.httpclient.get<any>('api/currentUser'))
      .then(res => this.$userDetail.next(res)).catch(() => console.error("unauthorized...")
      );
  }
}
