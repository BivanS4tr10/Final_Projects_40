import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {
  email: string = '';
  errorMsg: string = '';

  // login.page.ts
  login() {
    this.http.post('http://192.168.1.10/api/check-email.php', { email: this.email })
      .subscribe((res: any) => {
        if (res.status === 'success') {
          // Simpan email untuk dipakai di verify-pin
          localStorage.setItem('user_email', this.email);
          this.router.navigate(['/verify-pin']);
        } else {
          this.errorMsg = res.message;
        }
      }, err => {
        this.errorMsg = 'Koneksi ke server gagal.';
      });
  }

  cancel() {
    this.router.navigate(['/create-account']);
  }



  constructor(private router: Router, private authService: AuthService, private http: HttpClient) { }

  ngOnInit() {
  }

}
