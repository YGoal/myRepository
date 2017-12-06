import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ProductService} from "../../providers/product/product";
import {ProductDetailsPage} from "../../pages/product-details/product-details";

/**
 * Generated class for the ArticlePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-article',
  templateUrl: 'article.html',
})
export class ArticlePage {

  public allProducts = [];

  constructor(private productService: ProductService ,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.productService.getProducts()
      .subscribe((response) => {
        this.allProducts = response;
      });
    console.log(this.allProducts);
  }

  goToProductsDetailsPage(product){
    this.navCtrl.push(ProductDetailsPage,{
      productDetails : product
    });
  }

}
