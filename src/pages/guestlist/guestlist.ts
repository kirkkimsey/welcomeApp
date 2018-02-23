import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the GuestlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-guestlist",
  templateUrl: "guestlist.html"
})
export class GuestlistPage {
  guests: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewWillLoad() {
    this.guests = this.navParams.get("guests");
    console.log(this.guests);
  }
}
