import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  signIn() {
    this.router.navigate(['/welcome']);
  }

  login() {
    this.router.navigate(['/welcomeback']);
  }
}
