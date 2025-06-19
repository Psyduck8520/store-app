import {Component} from '@angular/core';
import {Product} from "./models/product.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  products: Product[] = [
    {
      id: '1',
      name: 'Mis libors ',
      image: 'assets/images/books.jpg',
      price: 100,
    },
    {
      id: '2',
      name: 'El mejor juguete',
      image: 'assets/images/toy.jpg',
      price: 100
    },
    {
      id: '3',
      name: 'Biciclita casi nueva',
      image: 'assets/images/bike.jpg',
      price: 200
    },
    {
      id: '4',
      name: 'Collección  de albummes',
      image: 'assets/images/album.jpg',
      price: 100,
    },
    {
      id: '5',
      name: 'Mis libors ',
      image: 'assets/images/books.jpg',
      price: 100,
    },
    {
      id: '6',
      name: 'My House ',
      image: 'assets/images/house.jpg',
      price: 100,
    },
    {
      id: '7',
      name: 'My House ',
      image: 'assets/images/glasses.jpg',
      price: 100,
    }
  ]

  imgParent = '';
  onLoaded(img: string) {
    console.log('Log  padre', img);
  }
}
