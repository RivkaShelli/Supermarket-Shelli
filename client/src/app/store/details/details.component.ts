import { Component, Input, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { OrderCount } from 'src/app/models/order.model';
import { ProductCount } from 'src/app/models/product.model';
import { UserModel } from 'src/app/models/user.model';
import { OrderService } from 'src/app/services/order.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() user: UserModel | null = null;
   productsCount!:ProductCount|null;
   orderCount!:OrderCount|null;
  constructor(private orderService: OrderService, private productsService:ProductsService) { }

  ngOnInit(): void {
    this.orderService.orderCount$.subscribe(count => this.orderCount = count);
    this.productsService.productsCount$.subscribe(count => this.productsCount = count)
    this.orderService.getOrdersCount();
    this.productsService.getProductCount();
  }

}
