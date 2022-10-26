import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductCategorModel } from '../../models/product-category.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  selected = 1;
  @Input() categories: ProductCategorModel[] = [];
  @Output() categoryClick: EventEmitter<number> = new EventEmitter<number>();
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.categories$.subscribe(res => this.categories = res);
    this.productsService.getCategories();
    this.categoryClick.emit(this.selected)
    
  }
  onCategoryClick(categoryId: any) {
    this.categoryClick.emit(categoryId);
  }

}
