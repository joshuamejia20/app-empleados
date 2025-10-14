import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { empleado } from '../empleado.model';
import { empleadosService } from '../empleados.service';

@Component({
  selector: 'app-proyectos-component',
  imports: [FormsModule, CommonModule],
  templateUrl: './proyectos-component.html',
  styleUrl: './proyectos-component.css'
})
export class ProyectosComponent implements OnInit {
  cuadroNombre: string = "";
  cuadroApellido: string = "";
  cuadroCargo: string = "";
  cuadroSalario: number = 0;
  empleados: empleado[];

  constructor(private router: Router, private empleadosService: empleadosService){
  }

  ngOnInit(): void{
    this.empleados = this.empleadosService.empleados;
  }
  volverHome(){
    this.router.navigate(['']);
  }

  agregar_empleado(){
    let miEmpleado = new empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);

    //this.empleados.push(miEmpleado);
    //this.miServicio.muestra_mensaje("Empleado registrado con el nombre: " + miEmpleado.nombre);
    this.empleadosService.agregar_empleado(miEmpleado);
    this.volverHome();
  }
}
