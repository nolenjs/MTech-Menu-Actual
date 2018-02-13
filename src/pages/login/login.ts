import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import {AngularFireAuth} from "angularfire2/auth";
import {User} from "../../interfaces/IUser";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  user = {} as User;
  confirm: string;
  show: boolean = false;

  constructor(//private afAuth: AngularFireAuth,
    public navCtrl: NavController) {
  }
  /*
    async login(user: User) {
      try {
        const result = await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
        if (result) {
          this.navCtrl.setRoot('HomePage');
        }
      }
      catch (e) {
        console.error(e);
      }
    }

    async register(user: User) {
      try {
        const result = await this.afAuth.auth.createUserWithEmailAndPassword(
          user.email,
          user.password
        );
        if (result) {
          this.navCtrl.setRoot('HomePage');
        }
      } catch (e) {
        console.error(e);
      }
    }*/
  addPasswordInput(){
    this.show = true;
  }
}
