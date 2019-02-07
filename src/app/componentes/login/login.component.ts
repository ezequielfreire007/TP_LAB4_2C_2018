import { Component, OnInit, VERSION } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';
import { Login } from 'src/app/modelo/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // email: string;
  // password: string;
  public form: FormGroup;
  public error: boolean;
  public errorMessage: string;
  // signin = new FormGroup({
  //   email: new FormControl(null, Validators.required),
  //   password: new FormControl(null, Validators.required),
  //   captcha: new FormControl(),
  // });

  public version = VERSION.full;
  public reactiveForm: FormGroup = new FormGroup({
      recaptchaReactive: new FormControl(null, Validators.required)
  });

  constructor(private _rotuer: Router, private _fb: FormBuilder, private _auth: AuthService ) {
    this.form = this._fb.group({
      user: ['', Validators.required],
      pass: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response ${captchaResponse}:`);
  }

  entrar() {
    console.log('voy a pagina principal');
    this._rotuer.navigate(['/login']);
  }

  registro() {
    console.log('voy a la pagina de registro');
    this._rotuer.navigate(['/registro']);
  }

  cargarDefault(tipo: string) {
    let dataLogin: Login = null;
    switch (tipo) {
      case 'S':
        dataLogin = { 'user': 'admin', 'pass': 'admin'};
        this.form.setValue(dataLogin);
        this.submit();
        break;
      case 'B':
        dataLogin = { 'user': 'bartender', 'pass': 'bartender'};
        this.form.setValue(dataLogin);
        this.submit();
        break;
      case 'CE':
        dataLogin = { 'user': 'cervecero', 'pass': 'cervecero'};
        this.form.setValue(dataLogin);
        this.submit();
        break;
      case 'CO':
        dataLogin = { 'user': 'cocinero', 'pass': 'cocinero'};
        this.form.setValue(dataLogin);
        this.submit();
        break;
      case 'M':
        dataLogin = { 'user': 'mozo', 'pass': 'mozo'};
        this.form.setValue(dataLogin);
        this.submit();
        break;
    }
  }

  submit(): void {
    this.errorMessage = '';
    this.error = false;
    if (this.form.valid) {
      const dataLogin: Login = { 'user' : `${this.form.get('user').value}`,
        'pass': `${this.form.get('pass').value}`};
        console.log(dataLogin);
      this._auth.loginEmpleado(dataLogin)
        .then(
          response => {
            console.log(response);
            if (response['Estado'] === 'OK') {
              localStorage.setItem('token', response['Token']);
              if (!this._auth.redirectUrl) {
                this._auth.redirectUrl = '/Empleados';
              }
              this._rotuer.navigate([this._auth.redirectUrl]);
            } else {
              this.error = true;
              this.errorMessage = response['Mensaje'];
            }
          }
        )
        .catch(
          response => {
            this.error = true;
            this.errorMessage = response['Mensaje'];
          }
        );
    } else {
      this.errorMessage = 'Debe completar los campos correctamente.';
      this.error = true;
    }
  }

}
