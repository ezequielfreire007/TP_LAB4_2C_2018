export interface Empleado {
  id?: number;
  nombre?: string;
  tipo?: number;
  usuario?: string;
  fechaRegistro?: Date;
  ultimoLogin?: Date;
  estado?: string;
  cantidad_operaciones?: number;
}
