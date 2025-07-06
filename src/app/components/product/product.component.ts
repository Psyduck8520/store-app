import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import  {Product} from "../../models/product.model";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent  implements OnInit {
  @Output() addedProduct  = new EventEmitter<Product>(); //aki estamos mandando un objeto completo

  @Input() product: Product = {
    id : '',
    price :0,
    image :'',
    title: '',
    category:'',
    description:'',
  };
  ngOnInit(): void {
    }
  onAddToCart(){
    this.addedProduct.emit(this.product);
  }

}
