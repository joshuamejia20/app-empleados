import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { empleado } from './empleado.model';
import { CommonModule } from '@angular/common';
import { EmpleadoHijoC } from "./empleado-hijo-c/empleado-hijo-c";

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule, EmpleadoHijoC],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  titulo = "Listado de Empleados";
  cuadroNombre: string = "";
  cuadroApellido: string = "";
  cuadroCargo: string = "";
  cuadroSalario: number = 0;
  empleados: empleado[] = [
    new empleado("Josue", "Mejia", "Jefe", 99999.99),
    new empleado("Jared", "Garay", "Director", 1000),
    new empleado("Juan", "Pérez", "Administrativo", 800),
    new empleado("Maria", "Sorto", "Colaboradora", 500)
  ];

  agregar_empleado(){
    let miEmpleado = new empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);

    this.empleados.push(miEmpleado);
  }
}
