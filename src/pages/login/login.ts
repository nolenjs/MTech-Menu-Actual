import { Component } from '@angular/core';
import {NavController, ToastController} from 'ionic-angular';
import {AngularFireAuth} from "angularfire2/auth";
import {User} from "../../interfaces/IUser";

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
    private toastCtrl: ToastController) {
  }

    async login() {
        try {
          const result = await this.afAuth.auth.signInWithEmailAndPassword(this.user.email, this.user.password);
          if (result) {
            console.log("Signed IN!!!");
            this.navCtrl.setRoot('MenuPage');
          }
        }
        catch (e) {
          console.error(e);
          let toast = this.toastCtrl.create({
            message: "Sorry! Your email or password is incorrect",
            duration: 1500,
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
            this.navCtrl.setRoot('MenuPage');
          }
        } catch (e) {
          console.error(e);
        }
        console.log("Passwords matched")
      }
      else{
        let toast = this.toastCtrl.create({
          message: "Please verify that your passwords match.",
          duration: 1500,
          position: 'top'
        });
        toast.present()
      }
    }
  changeShow(bool: boolean){
    this.show = bool;
  }
}
