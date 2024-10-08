import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { empleado } from '../empleado.models';
import { FormsModule } from '@angular/forms';
import { empleadosService } from '../empleados.service';

@Component({
  selector: 'app-proyectos-component',
  standalone: true,
  imports: [FormsModule],
  providers:[Router],
  templateUrl: './proyectos-component.component.html',
  styleUrl: './proyectos-component.component.css'
})
export class ProyectosComponentComponent implements OnInit {
  volverHome(){
    this.router.navigate(['']);
  }

  titulo = 'Listado de Empleados';
  
  empleados:empleado[];

  cuadroNombre: string ="";
  cuadroApellido: string ="";
  cuadroCargo: string ="";
  cuadroSalario: number=0;

  constructor(private router: Router, private empleadosService: empleadosService){
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

    this.router.navigate(['']);

    this.cuadroNombre="";
    this.cuadroApellido="";
    this.cuadroCargo="";
    this.cuadroSalario=0;
  }
}
