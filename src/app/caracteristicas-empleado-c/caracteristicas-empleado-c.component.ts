import { Component, EventEmitter, Output } from '@angular/core';
import { ServicioEmpleadoService } from '../servicio-empleado.service';

@Component({
  selector: 'app-caracteristicas-empleado-c',
  templateUrl: './caracteristicas-empleado-c.component.html',
  styleUrls: ['./caracteristicas-empleado-c.component.css']
})
export class CaracteristicasEmpleadoCComponent {
  @Output() newItemEvent = new EventEmitter<string>();
  @Output() caracteristicasEmpleados = new EventEmitter<string>();

  constructor(private miServicio2: ServicioEmpleadoService){}

  agregar_caracteristicas(value: string){
    this.miServicio2.muestra_mensaje("Caracteristica capturada: "+ value);
    this.caracteristicasEmpleados.emit(value);
  }
}
