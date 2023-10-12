import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { empleado } from '../empleado.model';
import { empleadosService } from '../empleados.service';
import { ServicioEmpleadoService } from '../servicio-empleado.service';

@Component({
  selector: 'app-proyectos-component',
  templateUrl: './proyectos-component.component.html',
  styleUrls: ['./proyectos-component.component.css']
})
export class ProyectosComponentComponent {

  cuadroNombre: string = "";
  cuadroApellido: string = "";
  cuadroCargo: string = "";
  cuadroSalario: number = 0;

  empleados: empleado[];

  constructor(private router: Router, private miServicio: ServicioEmpleadoService, private empleadoService: empleadosService){}

  volverHome(){
    this.router.navigate(['']);
  }

  ngOnInit() : void{
    this.empleados=this.empleadoService.empleados;
  }

  agregar_empleado(){
    let miEmpleado = new empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);

    this.empleadoService.agregar_empleado_servicio(miEmpleado);

    this.volverHome();
  }
}
