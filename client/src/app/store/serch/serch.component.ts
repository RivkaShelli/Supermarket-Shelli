import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-serch',
  templateUrl: './serch.component.html',
  styleUrls: ['./serch.component.css']
})
export class SerchComponent implements OnInit {
  show: boolean = false;
  searchTerm = '';
  @Input() serchResult: ProductModel = undefined!;
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
  }

  findProduct() {
    this.productsService.getProductByName(this.searchTerm).subscribe(res => {
      this.serchResult = res[0];
      //this.show = true;
    })
  }

}
