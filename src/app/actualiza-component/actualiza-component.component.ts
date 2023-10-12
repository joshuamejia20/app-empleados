import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { empleado } from '../empleado.model';
import { empleadosService } from '../empleados.service';
import { ServicioEmpleadoService } from '../servicio-empleado.service';

@Component({
  selector: 'app-actualiza-component',
  templateUrl: './actualiza-component.component.html',
  styleUrls: ['./actualiza-component.component.css']
})
export class ActualizaComponentComponent {
  cuadroNombre: string = "";
  cuadroApellido: string = "";
  cuadroCargo: string = "";
  cuadroSalario: number = 0;
  indice: number;

  empleados: empleado[];

  constructor(private router: Router, private miServicio: ServicioEmpleadoService, private empleadoService: empleadosService, private route: ActivatedRoute){}

  volverHome(){
    this.router.navigate(['']);
  }

  ngOnInit() : void{
    this.empleados=this.empleadoService.empleados;
    this.indice = this.route.snapshot.params['id'];

    let empleado: empleado = this.empleadoService.encontrar_empleado(this.indice);

    this.cuadroNombre = empleado.nombre;
    this.cuadroApellido = empleado.apellido;
    this.cuadroCargo = empleado.cargo;
    this.cuadroSalario = empleado.salario;
  }

  actualizar_empleado(){
    let miEmpleado = new empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);

    //this.empleadoService.agregar_empleado_servicio(miEmpleado);
    this.empleadoService.actualizar_empleado(this.indice, miEmpleado);

    this.volverHome();
  }
}
