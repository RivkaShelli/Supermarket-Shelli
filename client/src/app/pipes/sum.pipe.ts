import { Pipe, PipeTransform } from '@angular/core';
import { CartItemResponse } from '../models/cart.model';

@Pipe({
  name: 'sum'
})
export class SumPipe implements PipeTransform {

  transform(items: CartItemResponse[] | null, price: string): any {
    return items?.reduce((a, b) => a + b.price, 0);
  }

}






