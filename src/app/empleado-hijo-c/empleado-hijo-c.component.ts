import { Component, Input } from '@angular/core';
import { empleado } from '../empleado.model';

@Component({
  selector: 'app-empleado-hijo-c',
  templateUrl: './empleado-hijo-c.component.html',
  styleUrls: ['./empleado-hijo-c.component.css']
})
export class EmpleadoHijoCComponent {
  @Input() empleadoLista: empleado;
  @Input() indice: number;

  array_caracteristicas = [""];

  agregar_caracteristica(caracteristica: string){
    this.array_caracteristicas.push(caracteristica);
    console.log(this.array_caracteristicas);
  }
}
