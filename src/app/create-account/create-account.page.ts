import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.page.html',
  styleUrls: ['./create-account.page.scss'],
  standalone: false,
})
export class CreateAccountPage {
  nama: string = '';
  email: string = '';
  password: string = '';
  phone = '';
  fotoFile: File | null = null;
  errorMsg: string = '';

  constructor(private http: HttpClient, private router: Router) { }

  onFileSelected(event: any) {
    this.fotoFile = event.target.files[0];
  }

  updateNameFromEmail() {
  const atIndex = this.email.indexOf('@');
  if (atIndex > 0) {
    this.nama = this.email.substring(0, atIndex);
  } else {
    this.nama = '';
  }
}

  createAccount() {
     const formData = new FormData();
    formData.append('nama', this.nama);
    formData.append('email', this.email);
    formData.append('password', this.password);
    formData.append('phone', this.phone);
    if (this.fotoFile) {
      formData.append('foto', this.fotoFile);
    }


    this.http.post('http://192.168.1.10/api/register.php', formData).subscribe((res: any) => {
      if (res.status === 'success') {
        this.router.navigate(['/login']);
      } else {
        this.errorMsg = res.message;
      }
    }, err => {
      this.errorMsg = 'Gagal terhubung ke server.';
    });
  }
}
