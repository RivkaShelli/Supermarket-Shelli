import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularMaterialModule } from './modules/angular-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './store/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SuperComponent } from './store/super/super.component';
import { CartComponent } from './store/cart/cart.component';
import { CategoriesComponent } from './store/categories/categories.component';
import { AllProductsComponent } from './store/all-products/all-products.component';
import { ProductComponent } from './store/product/product.component';
import { RegisterComponent } from './store/register/register.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { SerchComponent } from './store/serch/serch.component';
import { ModalComponent } from './store/modal/modal.component';
import { CartItemComponent } from './store/cart-item/cart-item.component';
import { WelcomeComponent } from './store/welcome/welcome.component';
import { SingInComponent } from './store/sing-in/sing-in.component';
import { AboutUsComponent } from './store/about-us/about-us.component';
import { DetailsComponent } from './store/details/details.component';
import { EditModalComponent } from './store/edit-modal/edit-modal.component';
import { AddProductComponent } from './store/add-product/add-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeadersComponent } from './store/headers/headers.component';
import { OrderCartComponent } from './store/order-cart/order-cart.component';
import { OrderFormComponent } from './store/order-form/order-form.component';
import { OrderComponent } from './store/order/order.component';
import { SumPipe } from "./pipes/sum.pipe";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SuperComponent,
    CartComponent,
    CategoriesComponent,
    AllProductsComponent,
    ProductComponent,
    RegisterComponent,
    SerchComponent,
    ModalComponent,
    CartItemComponent,
    WelcomeComponent,
    SingInComponent,
    AboutUsComponent,
    DetailsComponent,
    EditModalComponent,
    AddProductComponent,
    HeadersComponent,
    OrderCartComponent,
    OrderFormComponent,
    OrderComponent,
    SumPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule,
    HttpClientModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  providers: [{
    useClass: JwtInterceptor,
    provide: HTTP_INTERCEPTORS,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
