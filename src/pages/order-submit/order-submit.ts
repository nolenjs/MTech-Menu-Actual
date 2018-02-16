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
      /*background-color: cornsilk;*/
    }
    ion-card{
      margin: auto;
      max-width: 400px;
     
     
    }
    ion-card-content{
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }

  `]
})

export class OrderSubmitPage {
  orderInformation;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.orderInformation = this.navParams.data;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderSubmitPage');
    console.log(this.orderInformation);
  }

}
