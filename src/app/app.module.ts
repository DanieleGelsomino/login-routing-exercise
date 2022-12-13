import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componenti/home/home.component';
import { LoginComponent } from './componenti/login/login.component';
import { SigninComponent } from './componenti/signin/signin.component';
import { PasswordRecoveryComponent } from './componenti/password-recovery/password-recovery.component';
import { NotfoundComponent } from './componenti/notfound/notfound.component';
import { WelcomeComponent } from './componenti/welcome/welcome.component';
import { WelcomebackComponent } from './componenti/welcomeback/welcomeback.component';
import { ProfileUserComponent } from './componenti/profile-user/profile-user.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

// ANGULAR MATERIAL
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { LayoutModule } from '@angular/cdk/layout';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SigninComponent,
    PasswordRecoveryComponent,
    NotfoundComponent,
    WelcomeComponent,
    WelcomebackComponent,
    ProfileUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatCheckboxModule,
    LayoutModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
