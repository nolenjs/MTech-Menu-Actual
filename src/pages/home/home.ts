import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {MenuPage} from '../menu/menu';
import {LoginPage} from '../login/login';

import * as firebase from 'firebase/app';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styles: [`
    ion-content{

      background-color: white;
    }
    .menuButtonBox{
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;
      cursor: pointer;
      
    }
    
  `]
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }
  loading: boolean;

  ionViewWillEnter(){
    this.loading = true;
    firebase.auth().getRedirectResult()
      .then((result) => {
        console.log(result);
        if (result.credential) {
          // This gives you a Google Access Token. You can use it to access the Google API.
          let token = result.credential.accessToken;
          // ...
        }
        // The signed-in user info.
        let googleUser = result.user;
        console.log(googleUser);
        this.gotToMenu();
      })
      .catch((error) => {
        // Handle Errors here.
        console.log(error.code);
        console.log(error.message);
        console.log(error.email);
        console.log(error.credentials)
      });
    this.loading = false;
  }

  gotToMenu() {
    this.navCtrl.push(MenuPage);
  }

  gotToLogin() {
    this.navCtrl.push(LoginPage);
  }
}


