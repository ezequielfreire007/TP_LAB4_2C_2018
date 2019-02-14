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
import { HomeComponent } from './componentes/home/home.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { EmpleadosComponent } from './componentes/empleados/empleados.component';
import { JwtModule } from '@auth0/angular-jwt';
import { GenericoService } from './servicios/generico.service';
import { SpinnerInterceptor } from './servicios/interceptors/SpinnerInterceptor';
import { ErrorInterceptor } from './servicios/interceptors/ErrorInterceptor';
import { JwtInterceptor } from './servicios/interceptors/JWTInterceptro';
import { PedidosTableroComponent } from './componentes/pedidos-tablero/pedidos-tablero.component';

export function getAccessToken() {
  return localStorage.getItem('token');
}


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    HomeComponent,
    MenuComponent,
    EmpleadosComponent,
    PedidosTableroComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RecaptchaModule.forRoot(),
    RecaptchaFormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    [JwtModule.forRoot({
      config: {
        tokenGetter: (getAccessToken),
        whitelistedDomains: ['http://localhost:4200', 'localhost:4200']
      }
    })]
  ],
  providers: [
    GenericoService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpinnerInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        siteKey: '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI',
      } as RecaptchaSettings,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
