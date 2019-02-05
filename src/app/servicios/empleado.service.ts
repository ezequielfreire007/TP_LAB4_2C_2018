import { Injectable } from '@angular/core';
import { GenericoService } from './generico.service';
import { HttpClient } from '@angular/common/http';
import { Empleado } from '../modelo/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService extends GenericoService {

  constructor(protected http: HttpClient) {
    super(http);
  }

  public loginUser(empleado: Empleado) {
    return super.post<any>('', empleado);
  }

}
