import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioEmpleadoService {

  constructor() { }

  muestra_mensaje(mensaje: string){
    alert(mensaje);
  }
}
