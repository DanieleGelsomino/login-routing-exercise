import { Component, OnInit, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { NgForm, FormGroup } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnDestroy {
  signinform!: FormGroup;
  checked = false;
  destroyed = new Subject<void>();

  displayNameMap = new Map([
    [Breakpoints.XSmall, 'XSmall'],
    [Breakpoints.Small, 'Small'],
    [Breakpoints.Medium, 'Medium'],
    [Breakpoints.Large, 'Large'],
    [Breakpoints.XLarge, 'XLarge'],
  ]);

  constructor(
    private authService: AuthService,
    breakpointObserver: BreakpointObserver
  ) {
    breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .pipe(takeUntil(this.destroyed));
  }
  ngOnDestroy(): void {
    this.destroyed.next();
    this.destroyed.complete();
  }
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
