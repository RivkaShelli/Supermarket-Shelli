import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, lastValueFrom } from 'rxjs';
import { OrderCount } from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private $orderSubject = new BehaviorSubject<OrderCount|null>(null);
  get orderCount$() { return this.$orderSubject.asObservable(); }
  constructor(private httpClient: HttpClient) { }
  async getOrdersCount() {
    return lastValueFrom(this.httpClient.get<OrderCount>('/api/order/count'))
      .then(ordersCount => this.$orderSubject.next(ordersCount));
  }
  newOrder(order:any) {
    return lastValueFrom(this.httpClient.post<any>('/api/order', order));
  }
  




}
