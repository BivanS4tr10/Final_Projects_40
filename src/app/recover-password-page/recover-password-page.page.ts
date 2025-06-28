import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-recover-password-page',
  templateUrl: './recover-password-page.page.html',
  styleUrls: ['./recover-password-page.page.scss'],
  standalone: false,
})
export class RecoverPasswordPagePage {
  target: string = ''; 
  method: string = 'email'; 
  message: string = '';
  verificationCode: string = '';
  showVerification: boolean = false;
  enteredCode: string = '';
  selectedTarget: string = '';

  constructor(private navCtrl: NavController, private http: HttpClient, private router: Router) {}

  verifikasiKode() {
  // Misal: validasi kode dari input dan kirim ke backend (cek-kode.php)
  console.log('Memverifikasi kode...');

  // Contoh fungsi minimal:
  if (!this.enteredCode) {
    this.message = 'Kode belum dimasukkan.';
    return;
  }

  const payload = {
    target: this.selectedTarget, // email atau nomor
    code: this.enteredCode
  };

  this.http.post('http://localhost/laragon/www/api/cek-kode.php', payload).subscribe(
    (res: any) => {
      if (res.success) {
        // arahkan ke set-new-password dan bawa user_id
        this.router.navigate(['/set-new-password'], {
          queryParams: { user_id: res.user_id }
        });
      } else {
        this.message = res.message || 'Kode salah.';
      }
    },
    (err) => {
      console.error(err);
      this.message = 'Terjadi kesalahan server.';
    }
  );
}

  kirimKode() {
    this.http.post('http://localhost/laragon/www/api/send-code.php', {
      target: this.target,
      method: this.method
    }).subscribe((res: any) => {
      if (res.status === 'success') {
        localStorage.setItem('recover_target', this.target);
        this.router.navigate(['/verify-code-page']);
      } else {
        this.message = res.message;
      }
    });
  }

  goNext() {
  if (!this.target || !this.method) {
    this.message = 'Silakan isi email atau nomor telepon dan pilih metode.';
    return;
  }

  const body = {
    target: this.target,
    method: this.method
  };

  this.http.post('http://localhost/laragon/www/api/send-code.php', body).subscribe(
    (response: any) => {
      if (response.success) {
        this.showVerification = true;
        this.message = '';
        console.log('Kode verifikasi dikirim melalui', this.method);
      } else {
        this.message = response.message || 'Gagal mengirim kode.';
      }
    },
    (error) => {
      console.error('HTTP error:', error);
      this.message = 'Terjadi kesalahan server.';
    }
  );
  }

  cancel() {
    this.showVerification = false;
    this.navCtrl.back(); // Kembali ke halaman sebelumnya
  }
}
