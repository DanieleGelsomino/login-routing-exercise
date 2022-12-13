import { Component } from '@angular/core';
import { UserService } from './servizi/user.service';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'login-routing';

  constructor(
    private userService: UserService,
    private authService: AuthService
  ) {}

  showLink() {
    return this.userService.checkUser();
  }

  onLogout() {
    this.authService.logout();
  }
}
