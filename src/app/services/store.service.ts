import { Injectable } from '@angular/core';
import {Product} from "../models/product.model";

@Injectable({ // se puedes inyectar en otros  componentes y servicios
  providedIn: 'root'
})
export class StoreService {
 private myShoppingCart: Product[] =  [];
 constructor() { }

  addProduct(product: Product) {
     this.myShoppingCart.push(product);
  }
  getShoppingCart(): Product[] {
   return this.myShoppingCart;
  }

  getTotal() {
    return  this.myShoppingCart.reduce((sum,item) => sum + item.price, 0);
  }

}
