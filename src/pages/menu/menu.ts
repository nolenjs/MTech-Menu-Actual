import { Component } from '@angular/core';
import {NavController, NavParams, ToastController} from 'ionic-angular';
import { MenuApiProvider } from '../../providers/menu-api/menu-api';
import {OrderSubmitPage} from "../order-submit/order-submit";
import {LoginPage} from "../login/login";

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  private breakfastOpenTime: number = 8;
  private breakfastCloseTime: number = 10;

  private lunchOpenTime: number = 11;
  private lunchCloseTime: number = 20;

  hour = new Date().getHours();
  minutes = new Date().getMinutes();

  breakfastInfo: any;
  lunchInfo: any;
  breakfastTime: boolean;
  lunchTime: boolean;


  orderPrice = [];
  orderItems = [];
  date = new Date();

  constructor(
    public navCtrl: NavController,
    private navParams: NavParams,
    public menuProvider: MenuApiProvider,
    public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
    this.date = new Date();
    this.date = new Date('December 17, 2018 11:01:00');
    this.updateTime();
    this.menuChecker();
  }

  menuChecker(){

    this.hour = this.date.getHours();
    this.minutes = this.date.getMinutes();

    console.log('hour: ' + this.hour);
    console.log('minutes: ' + this.minutes);

    if (this.hour >= this.breakfastOpenTime && this.hour < this.breakfastCloseTime
      || (this.hour == this.breakfastCloseTime && this.minutes <= 30)) {

      this.getBreakfast();
      this.breakfastTime = true;
      this.lunchTime = false;
    }

    else if (this.hour >= this.lunchOpenTime && this.hour < this.lunchCloseTime
      || (this.hour == this.breakfastCloseTime && this.minutes >= 30)) {
      this.getLunchAndDinner();
      this.breakfastTime = false;
      this.lunchTime = true;
    }
  }

  updateTime(){
    setInterval(() => {

      this.date = new Date();
      console.log('changed' + this.date);

      this.menuChecker();

    }, 60000);
  }

  getBreakfast() {
    this.menuProvider.getBreakfastMenuData().subscribe((breakfastMenu: any) => {
      this.breakfastInfo = breakfastMenu;

      console.log(this.breakfastInfo);
    });
  }

  getLunchAndDinner() {
    this.menuProvider.getLunchMenuData().subscribe((lunchMenu: any) => {
      this.lunchInfo = lunchMenu;

      console.log(this.lunchInfo);
    });
  }


  order(itemName, item){
    let order = [];
    // order.push({
    //   name: item,
    //   price: itemPrice
    // });
    this.orderItems.push(item);


    let toast = this.toastCtrl.create({
      message: `Your order of ${itemName} has been added`,
      duration: 1000,
      position: 'bottom'
    });

    console.log(this.orderItems);

    toast.present();
  }



  ordersubmitted(){
    if (this.navParams.data === true){
      this.navCtrl.push(OrderSubmitPage, [{items: this.orderItems}])
    }
    else{
      let toast = this.toastCtrl.create({
        message: `You need to login/register to submit your order`,
        duration: 1500,
        position: 'bottom'
      });
      toast.present();
      this.navCtrl.push(LoginPage, [true, this.orderItems, this.orderPrice])
    }


  }


}


// WEBPACK FOOTER //
// ./src/pages/menu/menu.ts
