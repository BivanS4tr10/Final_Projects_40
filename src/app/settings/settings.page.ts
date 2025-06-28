import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: false,
})
export class SettingsPage {
  constructor(private navCtrl: NavController) {}

  goToProfile() {
    this.navCtrl.navigateForward('/profile');
  }

  goToAbout() {
  this.navCtrl.navigateForward('/about');
  }
}
