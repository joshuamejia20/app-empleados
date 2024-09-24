import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { empleado } from './empleado.models';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  titulo = 'Listado de Empleados';
  empleados: empleado[]=[
    new empleado('Josue','Mejia', 'Ingeniero',5000),
    new empleado('Jared','Garay', 'Jefe',3000),
    new empleado('Juan','Pérez', 'Administrativo',1000),
    new empleado('Maria','Sorto', 'Colaborador',800),
  ];

  cuadroNombre: string ="";
  cuadroApellido: string ="";
  cuadroCargo: string ="";
  cuadroSalario: number=0;

  guardar_empleado(){
    //if
    let miEmpleado = new empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);

    this.empleados.push(miEmpleado);
  }
}
