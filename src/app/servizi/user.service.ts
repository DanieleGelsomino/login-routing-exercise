import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private router: Router) {}

  checkUser() {
    if (localStorage.getItem('email')) {
      return true;
    }
    return false;
  }
}
