import { Component, OnInit, VERSION } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  // signin = new FormGroup({
  //   email: new FormControl(null, Validators.required),
  //   password: new FormControl(null, Validators.required),
  //   captcha: new FormControl(),
  // });

  public version = VERSION.full;
  public reactiveForm: FormGroup = new FormGroup({
      recaptchaReactive: new FormControl(null, Validators.required)
  });

  constructor(private rotuer: Router) { }

  ngOnInit() {
  }

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response ${captchaResponse}:`);
  }

  entrar() {
    console.log('voy a pagina principal');
    this.rotuer.navigate(['/login']);
  }

  registro() {
    console.log('voy a la pagina de registro');
    this.rotuer.navigate(['/registro']);
  }

}
