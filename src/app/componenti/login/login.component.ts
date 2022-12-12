import { Component } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginform!: FormGroup;

  constructor(private authService: AuthService) {}

  onSubmit(loginform: NgForm) {
    if (!loginform.valid) {
      return;
    }
    const email = loginform.value.email;
    const password = loginform.value.password;
    console.log('email:' + email, 'password:' + password);
    this.authService.login();

    loginform.reset();
  }
}
