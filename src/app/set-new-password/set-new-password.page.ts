import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-set-new-password',
  templateUrl: './set-new-password.page.html',
  styleUrls: ['./set-new-password.page.scss'],
  standalone: false,
})
export class SetNewPasswordPage {
  newPassword: string = '';
  userId: number | null = null;
  message: string = '';
  repeatPassword: string = '';


  constructor(
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
  const id = params['user_id'];
  if (id) {
    this.userId = +id;
  } else {
    this.message = 'User ID tidak ditemukan.';
  }
});
  }

  savePassword() {
    if (!this.newPassword || !this.repeatPassword) {
  this.message = 'Password tidak boleh kosong.';
  return;
}

if (this.newPassword !== this.repeatPassword) {
  this.message = 'Password tidak cocok.';
  return;
}

    this.http.post('http://localhost/laragon/www/api/set-password.php', {
      user_id: this.userId,
      new_password: this.newPassword
    }).subscribe(
      (response: any) => {
        if (response.success) {
          this.message = '';
          this.router.navigate(['/login']);
        } else {
          this.message = response.message || 'Gagal memperbarui password.';
        }
      },
      (error) => {
        console.error(error);
        this.message = 'Terjadi kesalahan server.';
      }
    );
  }

  cancel() {
    this.router.navigate(['/login']);
  }
}