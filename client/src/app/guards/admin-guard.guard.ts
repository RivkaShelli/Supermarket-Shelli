import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';
import { LoginServiceService } from '../services/login-service.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardGuard implements CanActivate {
  user: UserModel | null = null;
  constructor(private loginServiceService: LoginServiceService) { } 

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.loginServiceService.$user.subscribe(res => this.user = res);
    if (this.user?.role == 1) {
      return true;
    } else {
      return false;
    }
    
  }
  
}
