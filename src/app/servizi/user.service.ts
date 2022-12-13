import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  checkUser() {
    if (localStorage.getItem('email')) {
      return true;
    }
    return false;
  }
}
