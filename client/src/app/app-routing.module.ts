import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './store/register/register.component';
import { LoggedGuard } from './guards/logged.guard';
import { CartComponent } from './store/cart/cart.component';
import { SuperComponent } from './store/super/super.component';
import { WelcomeComponent } from './store/welcome/welcome.component';
import { SingInComponent } from './store/sing-in/sing-in.component';
import { AddProductComponent } from './store/add-product/add-product.component';
import { AdminGuardGuard } from './guards/admin-guard.guard';
import { OrderComponent } from './store/order/order.component';


const routes: Routes = [
  { path: '', component: SingInComponent },
  { path: 'welcome', component: WelcomeComponent, canActivate: [LoggedGuard] },
  { path: 'store', component: SuperComponent, canActivate: [LoggedGuard] },
  { path: 'order', component: OrderComponent, canActivate: [LoggedGuard] },
  { path: 'register', component: RegisterComponent },
  { path: 'addProduct', component: AddProductComponent, canActivate: [LoggedGuard,AdminGuardGuard] },
  { path: 'cart', component: CartComponent, canActivate: [LoggedGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
