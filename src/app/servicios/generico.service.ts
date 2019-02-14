import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GenericoService {

  url = 'http://localhost:8080/API_Comanda/';

  constructor(public http: HttpClient) { }

  // protected get<T>(api: string) {
  //   return this.http.get<T>(this.url + api).toPromise();
  // }

  // protected put<T>(api: string, body: any) {
  //   return this.http.put<T>(this.url + api, body).toPromise();
  // }

  // protected delete<T>(api: string) {
  //   return this.http.delete<T>(this.url + api).toPromise();
  // }

  // protected post<T>(api: string, body: any) {
  //   return this.http.post<T>(this.url + api, body).toPromise();
  // }


  public httpGetP ( url: string) {
    return this.http
    .get( this.url + url )
    .toPromise()
    .then( this.extractData )
    .catch( this.handleError );
  }

  public httpDeleteP ( url: string) {
    return this.http
    .delete( this.url + url )
    .toPromise()
    .then( this.extractData )
    .catch( this.handleError );
  }

  public httpPostP( url: string, request: Object) {
    return this.http.post( this.url + url, request).toPromise();
  }

  // tslint:disable-next-line:no-shadowed-variable
  public httpGetO<T>( url: string) {
    return this.http.get<T>( this.url + url );
  }


  private extractData ( res: Response ) {
    return res.json() || {};
  }

  private handleError ( error: Response | any ) {
    return error;
  }

}
