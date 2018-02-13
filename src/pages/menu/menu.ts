import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuApiProvider } from '../../providers/menu-api/menu-api';

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
  minuets = new Date().getMinutes();

  breakfastInfo: any;
  lunchInfo: any;
  breakfastTime: boolean;
  lunchTime: boolean;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuProvider: MenuApiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');

    if(this.hour >= 7  && this.hour < 11/*changes at 10:30*/) {
      this.getBreakfast();
      this.breakfastTime = true;
      this.lunchTime = false;
    }

    if(this.hour >=11  && this.hour < 20) {
      this.getLunchandDinner();
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
  getLunchandDinner(){
    this.menuProvider.getLunchMenuData().subscribe((lunchMenu: any)=>{
      this.lunchInfo = lunchMenu;

      console.log(this.lunchInfo);
    });
  }

}
