import { Component, Input } from '@angular/core';
import { empleado } from '../empleado.models';
import { CaracteristicasEmpleadoCComponent } from "../caracteristicas-empleado-c/caracteristicas-empleado-c.component";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-empleado-hijo-c',
  standalone: true,
  imports: [CaracteristicasEmpleadoCComponent, CommonModule, RouterModule],
  templateUrl: './empleado-hijo-c.component.html',
  styleUrl: './empleado-hijo-c.component.css'
})
export class EmpleadoHijoCComponent {

  @Input() empleadoLista: empleado;
  @Input() indice: number;
  array_caracteristicas = [''];

  agregar_caracteristica(caracteristica:string){
    this.array_caracteristicas.push(caracteristica);
  }
}
