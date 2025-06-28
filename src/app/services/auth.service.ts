import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginValid(email: string, password: string): boolean {
    // Ganti dengan validasi dari database-mu
    return email === 'test@example.com' && password === '123456';
  }

   pinValid(pin: string): boolean {
    return pin === '1234';
  }
  
  constructor() { }
}
