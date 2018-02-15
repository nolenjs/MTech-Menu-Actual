import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the OrderSubmitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order-submit',
  templateUrl: 'order-submit.html',
  styles: [`
    ion-content{
      background-color: cornsilk;
    }
    ion-card{
      
    }
    ion-card-content{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

  `]
})
export class OrderSubmitPage {
  menuPrice;
  menuItems;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.menuPrice = this.navParams.data[1];
    this.menuItems = this.navParams.data[0];

  }

  ionViewDidLoad() {
    this.menuPrice=[];
    console.log('ionViewDidLoad OrderSubmitPage', this.menuPrice);
  }

}
