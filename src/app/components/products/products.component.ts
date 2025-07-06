import { Component } from '@angular/core';
import {Product} from "../../models/product.model";
import {StoreService} from "../../services/store.service";
import  {ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  myShoppingCart: Product[] = [];
  total = 0;
  products: Product[] = []

  constructor(
    private storeService: StoreService,
    private ProductsService: ProductsService
  ) {
      this.myShoppingCart = this.storeService.getShoppingCart();
  }
  ngOnInit() {
     this.ProductsService.getAllProducts().subscribe(products => {
       this.products =  products;
     });
  }


  onAddToShoppingCart(product: Product) {
    console.log(product);
    this.storeService.addProduct(product);
    this.total =  this.storeService.getTotal();
  }
}
