import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse, HttpEventType } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {
  constructor(private _spinner: NgxSpinnerService ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this._spinner.show();
    return next.handle(request).pipe(tap(
      (event: HttpEvent<any>) => {
        if ( event instanceof HttpResponse ) {
          this._spinner.hide();
        }
    }));
  }
}
