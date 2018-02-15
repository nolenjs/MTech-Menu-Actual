import { Component } from '@angular/core';
import {NavController, ToastController} from 'ionic-angular';
import { MenuApiProvider } from '../../providers/menu-api/menu-api';
import {OrderSubmitPage} from "../order-submit/order-submit";

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

  orderPrice= [];
  orderItems =[];

  constructor(
    public navCtrl: NavController,
    public menuProvider: MenuApiProvider,
    public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');


    let date = new Date('December 17, 2018 8:01:00');

    this.hour = date.getHours();
    this.minutes = date.getMinutes();

    console.log('hour: ' + this.hour);
    console.log('minutes: ' + this.minutes);

    if(this.hour >= this.breakfastOpenTime && this.hour < this.breakfastCloseTime
      || (this.hour == this.breakfastCloseTime && this.minutes <= 30)) {

      this.getBreakfast();
      this.breakfastTime = true;
      this.lunchTime = false;
    }

    else if( this.hour >= this.lunchOpenTime && this.hour < this.lunchCloseTime
      || (this.hour == this.breakfastCloseTime && this.minutes >= 30)) {
      this.getLunchAndDinner();
      this.breakfastTime = false;
      this.lunchTime = true;
    }
  }

  getBreakfast(){
    this.menuProvider.getBreakfastMenuData().subscribe((breakfastMenu: any)=>{
      this.breakfastInfo = breakfastMenu;

      console.log(this.breakfastInfo);
    });
  }
  getLunchAndDinner(){
    this.menuProvider.getLunchMenuData().subscribe((lunchMenu: any)=>{
      this.lunchInfo = lunchMenu;

      console.log(this.lunchInfo);
    });
  }

  order(itemName, itemPrice){
    this.orderItems.push(itemName);
    this.orderPrice.push(Number(itemPrice));

    let toast = this.toastCtrl.create({
      message: `Your order of ${itemName} has been added`,
      duration: 1000,
      position: 'bottom'
    });

    console.log(this.orderPrice);
    console.log(this.orderItems);

    toast.present();
  }

  ordersubmitted(){

    this.navCtrl.push(OrderSubmitPage, [this.orderItems, this.orderPrice])

  }


}



// WEBPACK FOOTER //
// ./src/pages/menu/menu.ts
