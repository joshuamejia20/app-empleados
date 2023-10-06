import { Component } from '@angular/core';
import { empleado } from '../empleado.model';
import { ServicioEmpleadoService } from '../servicio-empleado.service';
import { empleadosService } from '../empleados.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent {

  titulo = 'Listado de Empleados';

  cuadroNombre: string = "";
  cuadroApellido: string = "";
  cuadroCargo: string = "";
  cuadroSalario: number = 0;

  empleados: empleado[];

  constructor(private miServicio: ServicioEmpleadoService, private empleadoService: empleadosService){
    
  }

  ngOnInit() : void{
    this.empleados=this.empleadoService.empleados;
  }

  agregar_empleado(){
    let miEmpleado = new empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);

    /*this.miServicio.muestra_mensaje(
      "El dato ingresado es: " + miEmpleado.nombre + " " + miEmpleado.apellido
    );*/

    this.empleadoService.agregar_empleado_servicio(miEmpleado);
  }
}
