import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserModel } from 'src/app/models/user.model';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  @Input() category$: BehaviorSubject<number> = new BehaviorSubject<number>(1);
  @Input() productArr: ProductModel[] | null = null;
  @Input() user: any | null = null;
  constructor(private productsService: ProductsService, public loginServiceService: LoginServiceService) { }

  ngOnInit(): void {
    this.category$.subscribe(() => this.productsService.getProductsByCategory(1))  
  }
  
}
