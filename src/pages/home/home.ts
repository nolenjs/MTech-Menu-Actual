import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LoginPage} from "../login/login";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styles: [`
    ion-content{
      /*background-color: oldlace;*/
    }


  `]
})
export class HomePage {

  constructor(public navCtrl: NavController) {


  }
 Login(){

    this.navCtrl.push(LoginPage)
 }
}


