import { Injectable } from '@angular/core';
import { GenericoService } from './generico.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Empleado } from '../modelo/empleado';
import { Login } from '../modelo/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  redirectUrl: string;

  constructor(public httpGeneric: GenericoService, private _router: Router) {}

  // Login del empleado
  public loginEmpleado(login: Login) {
    console.log(`ingresa a login empleado`);
    // const request: JSON = JSON.parse(JSON.stringify(login));
    return this.httpGeneric.httpPostP('empleados/login', login); // retorna el token del usuario
  }

  // Logout del empleado
  public logoutEmpleado() {
    localStorage.removeItem('token');
  }

  public getToken() {
    return localStorage.getItem('token');
  }

  public loggedIn() {
    return !!localStorage.getItem('token');
  }
}
