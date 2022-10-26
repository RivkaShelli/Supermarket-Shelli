import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent implements OnInit {

  isClient: boolean = false;
  constructor(private loginServiceService: LoginServiceService, private router:Router) { }

  ngOnInit(): void {
    this.loginServiceService.$user.subscribe(res => {
      if (res)
        this.isClient = true;
      else {
        this.isClient = false;
      }
    })
    this.loginServiceService.getUserDetail()
  }


  logOut() {
    this.loginServiceService.clearStorage()
    this.router.navigate(['/']);
  }
}
