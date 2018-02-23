import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  Toast,
  ToastController
} from "ionic-angular";
import { FormBuilder, FormGroup } from "@angular/forms";
import { GuestlistPage } from "../guestlist/guestlist";

/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-welcome",
  templateUrl: "welcome.html"
})
export class WelcomePage {
  firstName = "";
  lastName = "";
  guests = [];
  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private toastCtrl: ToastController
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad WelcomePage");
  }

  logForm() {
    this.guests.push(`${this.firstName} ${this.lastName}`);

    console.log(this.guests);
    let toast = this.toastCtrl.create({
      message: `${this.guests} is logged!`,
      duration: 3000
    });
    toast.present();
    this.navCtrl.push(GuestlistPage, {
      guests: this.guests
    });
  }
}
