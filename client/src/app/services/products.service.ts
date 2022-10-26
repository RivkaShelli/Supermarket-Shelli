import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, lastValueFrom } from 'rxjs';
import { ProductCategorModel } from '../models/product-category.model';
import { ProductCount, ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private $productSubject = new BehaviorSubject<ProductModel[]>([]);
  private $productsCount = new BehaviorSubject<ProductCount |null>(null);
  private $categories = new BehaviorSubject<ProductCategorModel[]>([]);
  get productSubject$() { return this.$productSubject.asObservable(); }
  get productsCount$() { return this.$productsCount.asObservable(); }
  get categories$() { return this.$categories.asObservable(); }

  constructor(private HttpClient: HttpClient, private router:Router) { }

  getProductCount() {
    return lastValueFrom(this.HttpClient.get<ProductCount>('/api/product/all/count'))
      .then(productsCount => this.$productsCount.next(productsCount))
  }

  getCategories() {
    return this.HttpClient.get<ProductCategorModel[]>('/api/product/categories').subscribe(cats => this.$categories.next(cats));
  }
  getProductByName(serchWord: string) {
    return this.HttpClient.get<ProductModel[]>(`/api/product/search/${serchWord}`);
  }
  getProductsByCategory(category: number) {
    if (category == 1)
      return lastValueFrom(this.HttpClient.get<ProductModel[]>(`/api/product`)).then(res=>this.$productSubject.next(res))
    return lastValueFrom(this.HttpClient.get<ProductModel[]>(`/api/product/${category}`)).then(res => this.$productSubject.next(res))
  }
 addProduct(product: ProductModel) {
      return lastValueFrom(this.HttpClient.post('/api/product', product)).then(res => {
        this.getProductsByCategory(1);
        console.log(res);
        this.router.navigate(['store'])
      }).catch(()=>console.error('faild to add product'))
  }
  async updateProduct(productDetail: ProductModel,productId:number) {
    try {
      const res = await lastValueFrom(this.HttpClient.put(`/api/product/${productId}`, productDetail));
      this.getProductsByCategory(1);
      console.log(res);
    } catch (err) {
      return console.log(err);
    }
  }
}
