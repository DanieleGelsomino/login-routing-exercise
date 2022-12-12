import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent {
  signinform!: FormGroup;

  constructor(private authService: AuthService) {}
  onSubmit(signinform: NgForm) {
    if (!signinform.valid) {
      return;
    }
    const name = signinform.value.nome;
    const surname = signinform.value.cognome;
    const email = signinform.value.email;
    const password = signinform.value.password;
    console.log(
      'nome:' + name,
      'cognome:' + surname,
      'email:' + email,
      'password:' + password
    );
    this.authService.signIn();
    signinform.reset();
  }
}
