import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { empleado } from '../empleado.model';
import { ServicioEmpleado } from '../servicio-empleado';
import { empleadosService } from '../empleados.service';
import { EmpleadoHijoC } from '../empleado-hijo-c/empleado-hijo-c';
empleadosService


@Component({
  selector: 'app-home-component',
  imports: [FormsModule, CommonModule, EmpleadoHijoC],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css'
})
export class HomeComponent implements OnInit {
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
