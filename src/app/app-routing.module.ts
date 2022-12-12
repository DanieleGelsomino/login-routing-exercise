import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componenti/home/home.component';
import { LoginComponent } from './componenti/login/login.component';
import { SigninComponent } from './componenti/signin/signin.component';
import { PasswordRecoveryComponent } from './componenti/password-recovery/password-recovery.component';
import { NotfoundComponent } from './componenti/notfound/notfound.component';
import { WelcomeComponent } from './componenti/welcome/welcome.component';
import { WelcomebackComponent } from './componenti/welcomeback/welcomeback.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'registrati', component: SigninComponent },
  { path: 'login', component: LoginComponent },
  { path: 'recupera-password', component: PasswordRecoveryComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'welcomeback', component: WelcomebackComponent },
  { path: '404', component: NotfoundComponent },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
