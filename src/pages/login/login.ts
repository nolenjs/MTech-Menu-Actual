import { Component } from '@angular/core';
import {NavController, NavParams, ToastController} from 'ionic-angular';
import {AngularFireAuth} from "angularfire2/auth";
import {User} from "../../interfaces/IUser";
import {MenuPage} from "../menu/menu";
import {OrderSubmitPage} from "../order-submit/order-submit";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [AngularFireAuth]
})
export class LoginPage {

  user = {} as User;
  confirm: string;
  show: boolean = false;

  constructor(public afAuth: AngularFireAuth,
    public navCtrl: NavController,
    private navParams: NavParams,
    private toastCtrl: ToastController) {
  }

    async login() {
        try {
          const result = await this.afAuth.auth.signInWithEmailAndPassword(this.user.email, this.user.password);
          if (result) {
            console.log("Signed IN!!!");
            if (this.navParams.data[0] === true){
              this.navCtrl.push(OrderSubmitPage, [this.navParams.data[1], this.navParams.data[2]])
            }
            else{
              this.navCtrl.push(MenuPage, true);
            }
          }
        }
        catch (e) {
          console.error(e);
          let toast = this.toastCtrl.create({
            message: e.message,
            duration: 1800,
            position: 'top'
          });
          toast.present();
        }

      }


    async register() {
      if (this.confirm === this.user.password){
        try {

          const result = await this.afAuth.auth.createUserWithEmailAndPassword(
            this.user.email,
            this.user.password
          );
          if (result) {
            console.log("Registered!!!");
            if (this.navParams.data[0] === true){
              this.navCtrl.push(OrderSubmitPage, [this.navParams.data[1], this.navParams.data[2]])
            }
            else{
              this.navCtrl.push(MenuPage, true);
            }
          }
        } catch (e) {
          console.error(e);
          let toast = this.toastCtrl.create({
            message: e.message,
            duration: 1800,
            position: 'top'
          });
          toast.present()
        }
        console.log("Passwords matched")
      }
      else{
        let toast = this.toastCtrl.create({
          message: "Please verify that your passwords match.",
          duration: 1800,
          position: 'top'
        });
        toast.present()
      }
    }
  changeShow(bool: boolean){
    this.show = bool;
  }
}
