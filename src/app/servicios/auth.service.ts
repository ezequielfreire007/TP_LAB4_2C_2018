import { Injectable } from '@angular/core';
import { GenericoService } from './generico.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Empleado } from '../modelo/empleado';
import { Login } from '../modelo/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends GenericoService {

  redirectUrl: string;

  constructor(protected http: HttpClient, private _router: Router) {
    super(http);
  }

  // Login del empleado
  public loginEmpleado(login: Login): any {
    return super.post<Object>('empleados/login', login); // retorna el token del usuario
  }

  // Logout del empleado
  public logoutEmpleado() {
    localStorage.removeItem('token');
  }
}
