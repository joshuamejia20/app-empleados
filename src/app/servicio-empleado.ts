import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioEmpleado {
  
  muestra_mensaje(mensaje: string){
    alert(mensaje);
  }
}
