import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private _auth: AuthService, private _router: Router) {
    // if (!this._auth.loggedIn()) {
    //   console.log('usuario no logueado logeador direccionar a login');
    //   this._router.navigate(['/login']);
    // }
  }

  ngOnInit() {
  }

  logout() {
    this._auth.logoutEmpleado();
    this._router.navigate(['/login']);
  }

}
