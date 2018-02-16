import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styles: [`
    ion-content{
      background-color: cornsilk;
    }
    
  `]
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

}
