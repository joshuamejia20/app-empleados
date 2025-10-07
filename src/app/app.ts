import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { empleado } from './empleado.model';
import { CommonModule } from '@angular/common';
import { EmpleadoHijoC } from "./empleado-hijo-c/empleado-hijo-c";
import { ServicioEmpleado } from './servicio-empleado';
import { empleadosService } from './empleados.service';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule, EmpleadoHijoC],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  titulo = "Listado de Empleados";
  cuadroNombre: string = "";
  cuadroApellido: string = "";
  cuadroCargo: string = "";
  cuadroSalario: number = 0;
  empleados: empleado[];
  

  constructor(private miServicio: ServicioEmpleado, private empleadosService: empleadosService){
    //this.empleados = this.empleadosService.empleados;
  }

  ngOnInit(): void{
    this.empleados = this.empleadosService.empleados;
  }

  agregar_empleado(){
    let miEmpleado = new empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);

    //this.empleados.push(miEmpleado);
    //this.miServicio.muestra_mensaje("Empleado registrado con el nombre: " + miEmpleado.nombre);
    this.empleadosService.agregar_empleado(miEmpleado);
  }
}
