import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { empleado } from '../empleado.models';
import { FormsModule } from '@angular/forms';
import { empleadosService } from '../empleados.service';

@Component({
  selector: 'app-actualiza-component',
  standalone: true,
  imports: [FormsModule],
  providers: [],
  templateUrl: './actualiza-component.component.html',
  styleUrl: './actualiza-component.component.css'
})
export class ActualizaComponentComponent implements OnInit{
  volverHome(){
    this.router.navigate(['']);
  }

  titulo = 'Listado de Empleados';
  
  empleados:empleado[];

  cuadroNombre: string ="";
  cuadroApellido: string ="";
  cuadroCargo: string ="";
  cuadroSalario: number=0;
  indice: number;
  accion: number;

  constructor(private router: Router, private empleadosService: empleadosService, private route: ActivatedRoute){
    //this.empleados = this.empleadosService.empleados;
  }

  ngOnInit(): void {
    this.accion = parseInt(this.route.snapshot.queryParams['accion']);
    this.indice = this.route.snapshot.params['id'];
    let empleado: empleado = this.empleadosService.encontrar_empleado(this.indice);
    this.cuadroNombre = empleado.nombre;
    this.cuadroApellido = empleado.apellido;
    this.cuadroCargo = empleado.cargo;
    this.cuadroSalario = empleado.salario;
  }

  accion_empleado(){
    if(this.accion == 1){
      let miEmpleado = new empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
      this.empleadosService.actualizar_empleado(this.indice, miEmpleado);
    }else{
      this.empleadosService.eliminar_empleado(this.indice);
    }

    setTimeout(() => {
      this.router.navigate(['']);
      
    }, 500);

  }

  /*actualizar_empleado(){
    //if
    let miEmpleado = new empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);

    //this.miServicio.muestra_mensaje("Registro realizado exitosamente");

    //this.empleados.push(miEmpleado);
    this.empleadosService.actualizar_empleado(this.indice, miEmpleado);

    this.router.navigate(['']);

    this.cuadroNombre="";
    this.cuadroApellido="";
    this.cuadroCargo="";
    this.cuadroSalario=0;
  }

  eliminar_empleado(){
    this.empleadosService.eliminar_empleado(this.indice);

    this.router.navigate(['']);
  }*/
}
