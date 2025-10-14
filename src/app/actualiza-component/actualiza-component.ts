import { Component } from '@angular/core';
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
export class ActualizaComponent {
  cuadroNombre: string = "";
  cuadroApellido: string = "";
  cuadroCargo: string = "";
  cuadroSalario: number = 0;
  empleados: empleado[];
  indice: number;

  constructor(private router: Router, private empleadosService: empleadosService, private route: ActivatedRoute){
  }

  ngOnInit(): void{
    this.empleados = this.empleadosService.empleados;
    this.indice = this.route.snapshot.params["id"];

    let empleado: empleado = this.empleadosService.encontrar_empleado(this.indice);

    this.cuadroNombre = empleado.nombre;
    this.cuadroApellido = empleado.apellido;
    this.cuadroCargo = empleado.cargo;
    this.cuadroSalario = empleado.salario;
  }
  volverHome(){
    this.router.navigate(['']);
  }

  actualizar_empleado(){
    let miEmpleado = new empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);

    //this.empleados.push(miEmpleado);
    //this.miServicio.muestra_mensaje("Empleado registrado con el nombre: " + miEmpleado.nombre);
    this.empleadosService.actualizar_empleado(this.indice, miEmpleado);
    this.volverHome();
  }
}
