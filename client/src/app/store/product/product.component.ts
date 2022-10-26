import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserModel } from 'src/app/models/user.model';
import { ModalComponent } from '../modal/modal.component';
import { ProductModel } from '../../models/product.model';
import { environment } from 'src/environments/environment';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { EditModalComponent } from '../edit-modal/edit-modal.component';
import { ProductsService } from 'src/app/services/products.service';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { CartItem, CartItemResponse, CartModel } from 'src/app/models/cart.model';
export interface DialogData {
  quantity: number
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
  
export class ProductComponent implements OnInit {
  @Input() product: ProductModel = undefined!
  @Input() cart:CartModel | null = null;
  @Input() productChanges:ProductModel = undefined!
  @Input() user: UserModel | null = null;
  cartId!: number 
  imageUrl: string = environment.serverImageUrl;
  quantity: number = 1;
  
  constructor(public dialog: MatDialog,
    private loginServiceService: LoginServiceService,
    private productsService: ProductsService,
    private router: Router,
    private cartService: CartService
  ) { }

  ngOnInit(): void { 
    this.loginServiceService.$user.subscribe(res => this.user = res);
    this.cartService.$cart.subscribe(res => {      
      this.cart = res;
      this.cartId = res.cartId;
    })
   }
  
  onAddToCartClick(product: ProductModel): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '250px',
      data: { quantity: this.quantity }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.quantity = result;
      this.cartService.addItem({
        product_id: product.product_id,
        amount: this.quantity,
        price: this.product.price * this.quantity,
        cart_id: this.cartId})
    });
  }
  onEditClick(product:ProductModel) {
    const dialogRef = this.dialog.open(EditModalComponent, {
      width: '250px',
      data: { ...product }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.productChanges = result;
      this.productsService.updateProduct(this.productChanges,this.product.product_id)

    });
  }
}




