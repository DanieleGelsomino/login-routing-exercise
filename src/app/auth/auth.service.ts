import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../servizi/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router, private userService: UserService) {}

  signIn() {
    this.router.navigate(['/welcome']);
  }

  login() {
    this.router.navigate(['/welcomeback']);
  }

  logout() {
    localStorage.removeItem('email');
    this.router.navigate(['/home']);
  }
}
