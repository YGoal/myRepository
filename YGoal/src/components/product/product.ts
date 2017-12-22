import { Component } from '@angular/core';

/**
 * Generated class for the ProductComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'product',
  templateUrl: 'product.html'
})
export class ProductComponent {

  text: string;

  constructor() {
    console.log('Hello ProductComponent Component');
    this.text = 'Hello World';
  }

}
