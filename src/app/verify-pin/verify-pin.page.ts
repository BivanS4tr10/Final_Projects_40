import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-verify-pin',
  templateUrl: './verify-pin.page.html',
  styleUrls: ['./verify-pin.page.scss'],
  standalone: false,
})
export class VerifyPinPage {
  password: string = '';
  email: string = '';
  errorMsg: string = '';

  constructor(private http: HttpClient, private alertController: AlertController, private router: Router, private authService: AuthService) {}

  ionViewWillEnter() {
    const storedEmail = localStorage.getItem('user_email');
    if (storedEmail) {
      this.email = storedEmail;
    } else {
      this.router.navigate(['/login']);
    }
  }

  verifikasi() {
    this.http.post('http://localhost/laragon/www/api/verify-password.php', {
      email: this.email,
      password: this.password
    }).subscribe((res: any) => {
      if (res.status === 'success') {
        this.router.navigate(['/shop']);
      } else {
        this.errorMsg = res.message;
      }
    }, err => {
      this.errorMsg = 'Terjadi kesalahan koneksi.';
    });
  }

  lupaPassword() {
    this.router.navigate(['/recover-password-page']);
  }

  notYou() {
    this.router.navigate(['/login']);
  }

}