import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GenericoService {

  url = '';

  constructor(private http: HttpClient) { }

  protected get<T>(api: string) {
    return this.http.get<T>(this.url + api).toPromise();
  }

  protected put<T>(api: string, body: any) {
    return this.http.put<T>(this.url + api, body).toPromise();
  }

  protected delete<T>(api: string) {
    return this.http.delete<T>(this.url + api).toPromise();
  }

  protected post<T>(api: string, body: any) {
    return this.http.post<T>(this.url + api, body).toPromise();
  }

}
