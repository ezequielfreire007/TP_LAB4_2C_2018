import { Injectable } from '@angular/core';
import { GenericoService } from './generico.service';
import { Menu } from '../modelo/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(public http: GenericoService) { }

  public listar() {
    return this.http.httpGetO<Menu[]>('menu/listar');
  }
}
