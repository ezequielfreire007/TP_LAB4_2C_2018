// tslint:disable-next-line:eofline
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../auth.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private _auth: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe( catchError(err => {
      if (err.status === 401) {
        console.log(err.status);
        // en caso de response 401 realiza un logout de usuario.
        this._auth.logoutEmpleado();
        location.reload();
      }
      const error = err.error.message || err.statusText;
      return throwError(error);
    }));
  }
}
