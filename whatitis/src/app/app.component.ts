import { Product } from './product.model';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Product[];

  constructor() {
  this.products = [
    new Product(
      'MYSHOES',
      'Black Running Shoes',
      '/resources/images/products/black-hat.jpg',
      ['Men', 'Shoes', 'Running Shoes'],
      109.99
    ),
    new Product(
      'NEATOJACKET',
      'Blue Jacket',
      '/resources/images/products/black-hat.jpg',
      ['Women', 'Apparel', 'Jackets & Vests'],
      238.99
    ),
    new Product(
      'NICEHAT',
      'A nice Black Het',
      '/resources/images/products/black-hat.jpg',
      ['Men', 'Accessories', 'Hats'],
      29.99
    )
  ];


  }

  productWasSelected(product: Product): void {
    console.log('Procuct clicked: ', product);
  }

}
