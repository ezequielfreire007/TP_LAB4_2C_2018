import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../servicios/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _authService: AuthService,
    private _router: Router, private _jwt: JwtHelperService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    const url: string = state.url;
    const roles = next.data['roles'] as Array<string>;
    console.log(roles);
    return this.checkLogin(url, roles);
  }

  checkLogin(url: string, roles: Array<string>): boolean {
    const token = localStorage.getItem('token');
    const tokenData = this._jwt.decodeToken(token);
    let check = false;

    if (tokenData) {
      const tipoUsuario = tokenData['tipo'];
      this._authService.redirectUrl = '/empleados';
      roles.forEach(element => {
        if (tipoUsuario === element) {
          check = true;
        }
      });
    } else {
      this._authService.logoutEmpleado();
      this._router.navigate(['/login']);
    }

    return check;
  }
}
