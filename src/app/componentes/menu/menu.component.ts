import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/modelo/usuario';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  usuario: Usuario;


  constructor(private _auth: AuthService, private _router: Router, private jwt: JwtHelperService) {
    // if (!this._auth.loggedIn()) {
    //   console.log('usuario no logueado logeador direccionar a login');
    //   this._router.navigate(['/login']);
    // }
    const token = localStorage.getItem('token');
    const tokenData = this.jwt.decodeToken(token);
    this.usuario = {
      usuario: tokenData['usuario'],
      tipo: tokenData['tipo'],
      id: tokenData['id'],
      nombre: tokenData['nombre']
    };
  }

  ngOnInit() {
  }

  logout() {
    this._auth.logoutEmpleado();
    this._router.navigate(['/login']);
  }

}
