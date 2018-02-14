import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import { MenuApiProvider } from '../../providers/menu-api/menu-api';
import {HomePage} from '../home/home';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {


  hour = new Date().getHours();
  minuet = new Date().getMinutes();

  breakfastInfo: any;
  lunchInfo: any;
  breakfastTime: boolean;
  lunchTime: boolean;

  orderPrice= [];
  orderItems =[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuProvider: MenuApiProvider,
    public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');

    if(this.hour >= 8 /*opens at 8*/  && this.hour < 11/*changes at 10:30*/) {
      this.getBreakfast();
      this.breakfastTime = true;
      this.lunchTime = false;
    }

    if(this.hour >=11 && this.hour < 20) {
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
      duration: 2000,
      position: 'bottom'
    });

    console.log(this.orderPrice);
    console.log(this.orderItems);

    toast.present();
  }

}
