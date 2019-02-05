import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../servicios/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';


export class AuthGuard implements CanActivate {

  constructor(private _authService: AuthService,
    private _router: Router, private _jwt: JwtHelperService) { }

  canActivate(): boolean {
    if (this._authService) {
      return true;
    }
    return false;
  }
}
