import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';

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
    ion-content {
      background-color: white;
    }

    ion-card {
      margin: auto;
      max-width: 400px;

    }

    ion-card-content {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
    
    .hover-delete {
      visibility: hidden;
    }
    
    .menu-item:hover .hover-delete {
      visibility: visible;
    }
      
      

  `]
})

export class OrderSubmitPage {
  orderInformation;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public toastCtrl: ToastController) {
    this.orderInformation = this.navParams.data[0];
  }

  confirm() {
    // this.confirmOrder.push();

    let toast = this.toastCtrl.create({
        message: `Your order has been sent`,
        duration: 1000,
        position: 'top'
      }
    );

    toast.present();
  }

    delete(index){
        (this.orderInformation.items).splice(index, 1);
    };

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderSubmitPage');
    console.log(this.orderInformation);
  }


}
