import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Componentes para formularios (ReactiveFormsModule - recaptcha)
import { FormsModule, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

// Importo componentes para captcha
import { RecaptchaModule, RECAPTCHA_SETTINGS, RecaptchaSettings } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';
import { RECAPTCHA_LANGUAGE } from 'ng-recaptcha';


// Componentes a rutear
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    RecaptchaModule.forRoot(),
    RecaptchaFormsModule,
    AppRoutingModule,
  ],
  providers: [
    // {
    //   provide: RECAPTCHA_SETTINGS,
    //   useValue: {
    //     siteKey: '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI',
    //   } as RecaptchaSettings,
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
