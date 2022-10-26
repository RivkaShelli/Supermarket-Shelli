import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from './services/login-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'superMarket';
  constructor(private loginServiceService: LoginServiceService,
    private router:Router
  ) { }

  logOut() {
    this.loginServiceService.clearStorage();
    this.router.navigate(['']);
  }
}
