import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { UserService } from '../../servizi/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginform!: FormGroup;

  constructor(private authService: AuthService, private router: Router) {
    if (localStorage.getItem('email')) {
      this.router.navigate(['/welcomeback']);
    }
  }
  ngOnInit(): void {
    this.loginform = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    if (!this.loginform.valid) {
      return;
    }
    const email = this.loginform.value.email;
    const password = this.loginform.value.password;
    localStorage.setItem('email', email);
    // console.log('email:' + email, 'password:' + password);
    this.authService.login();

    this.loginform.reset();
  }

  onLogout() {
    this.authService.logout();
  }
}
