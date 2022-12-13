import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent {
  signinform!: FormGroup;

  constructor(private authService: AuthService, private router: Router) {
    if (localStorage.getItem('email')) {
      this.router.navigate(['/welcome']);
    }
  }
  onSubmit(signinform: NgForm) {
    if (!signinform.valid) {
      return;
    }
    const name = signinform.value.nome;
    const surname = signinform.value.cognome;
    const email = signinform.value.email;
    const password = signinform.value.password;
    localStorage.setItem('email', email);

    // console.log(
    //   'nome:' + name,
    //   'cognome:' + surname,
    //   'email:' + email,
    //   'password:' + password
    // );
    this.authService.signIn();
    signinform.reset();
  }
}
