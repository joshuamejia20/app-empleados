import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-caracteristicas-empleado-c',
  imports: [],
  templateUrl: './caracteristicas-empleado-c.html',
  styleUrl: './caracteristicas-empleado-c.css'
})
export class CaracteristicasEmpleadoC {
  @Output() newItemEvent = new EventEmitter<string>();
  @Output() caracteristicasEmpleados = new EventEmitter<string>();

  agregar_caracteristica(value: string){
    this.caracteristicasEmpleados.emit(value);
  }
}
