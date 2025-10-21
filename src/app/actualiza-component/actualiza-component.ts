import { Component, OnInit } from '@angular/core';
import { empleado } from '../empleado.model';
import { ActivatedRoute, Router } from '@angular/router';
import { empleadosService } from '../empleados.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-actualiza-component',
  imports: [FormsModule, CommonModule],
  templateUrl: './actualiza-component.html',
  styleUrl: './actualiza-component.css'
})
export class ActualizaComponent implements OnInit {
  cuadroNombre: string = "";
  cuadroApellido: string = "";
  cuadroCargo: string = "";
  cuadroSalario: number = 0;
  empleados: empleado[];
  indice: number;
  accion: number;

  constructor(private router: Router, private empleadosService: empleadosService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.accion = parseInt(this.route.snapshot.queryParams['accion']);
    /*if (this.accion == 2) {
      this.empleadosService.eliminar_empleado(this.indice);
      this.volverHome();
    }*/
    this.empleados = this.empleadosService.empleados;
    this.indice = this.route.snapshot.params["id"];

    let empleado: empleado = this.empleadosService.encontrar_empleado(this.indice);

    this.cuadroNombre = empleado.nombre;
    this.cuadroApellido = empleado.apellido;
    this.cuadroCargo = empleado.cargo;
    this.cuadroSalario = empleado.salario;
  }
  volverHome() {
    this.router.navigate(['']);
  }

  /*actualizar_empleado(){
    let miEmpleado = new empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);

    //this.empleados.push(miEmpleado);
    //this.miServicio.muestra_mensaje("Empleado registrado con el nombre: " + miEmpleado.nombre);
    this.empleadosService.actualizar_empleado(this.indice, miEmpleado);
    this.volverHome();
  }

  eliminar_empleado(){
    this.empleadosService.eliminar_empleado(this.indice);
    this.volverHome();
  }*/

  actualizar_empleado() {
    if (this.accion == 1) {
      let miEmpleado = new empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);

      //this.empleados.push(miEmpleado);
      //this.miServicio.muestra_mensaje("Empleado registrado con el nombre: " + miEmpleado.nombre);
      this.empleadosService.actualizar_empleado(this.indice, miEmpleado);
    } else {
      this.empleadosService.eliminar_empleado(this.indice);
    }

    this.volverHome();
  }
}
