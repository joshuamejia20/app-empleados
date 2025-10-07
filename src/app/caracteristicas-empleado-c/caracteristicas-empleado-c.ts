import { Component, EventEmitter, Output } from '@angular/core';
import { ServicioEmpleado } from '../servicio-empleado';

@Component({
  selector: 'app-caracteristicas-empleado-c',
  imports: [],
  templateUrl: './caracteristicas-empleado-c.html',
  styleUrl: './caracteristicas-empleado-c.css'
})
export class CaracteristicasEmpleadoC {
  @Output() newItemEvent = new EventEmitter<string>();
  @Output() caracteristicasEmpleados = new EventEmitter<string>();

  constructor(private miServicio: ServicioEmpleado){

  }

  agregar_caracteristica(value: string){
    this.miServicio.muestra_mensaje("Caracteristica ingresada: " + value);
    this.caracteristicasEmpleados.emit(value);
  }
}
