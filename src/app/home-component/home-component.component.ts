import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmpleadoHijoCComponent } from '../empleado-hijo-c/empleado-hijo-c.component';
import { empleado } from '../empleado.models';
import { empleadosService } from '../empleados.service';
import { ServicioEmpleadoService } from '../servicio-empleado.service';

@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [CommonModule, FormsModule, EmpleadoHijoCComponent],
  providers: [ServicioEmpleadoService, empleadosService],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css'
})
export class HomeComponentComponent implements OnInit{
  titulo = 'Listado de Empleados';
  
  empleados:empleado[];

  cuadroNombre: string ="";
  cuadroApellido: string ="";
  cuadroCargo: string ="";
  cuadroSalario: number=0;

  constructor(private miServicio: ServicioEmpleadoService, private empleadosService: empleadosService){
    //this.empleados = this.empleadosService.empleados;
  }

  ngOnInit(): void {
    this.empleados = this.empleadosService.empleados;
  }

  guardar_empleado(){
    //if
    let miEmpleado = new empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);

    //this.miServicio.muestra_mensaje("Registro realizado exitosamente");

    //this.empleados.push(miEmpleado);
    this.empleadosService.agregar_empleado_servicio(miEmpleado);

    this.cuadroNombre="";
    this.cuadroApellido="";
    this.cuadroCargo="";
    this.cuadroSalario=0;
  }
}
