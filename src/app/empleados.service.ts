import { Injectable } from "@angular/core";
import { empleado } from "./empleado.model";
import { ServicioEmpleadoService } from "./servicio-empleado.service";
import { DataServices } from "./data.services";

@Injectable()
export class empleadosService{
    /*empleados : empleado[] = [
      new empleado("Josue", "Mejia", "Presidente", 5000),
      new empleado("David", "Rivas", "Gerente", 3000),
      new empleado("Febe", "Martinez", "Jefa de Sección", 2500),
      new empleado("Marvin", "Molina", "Decano", 800)
    ];*/
    empleados : empleado[] = [];

  constructor(private servicioMensaje: ServicioEmpleadoService, private dataService: DataServices){}

  agregar_empleado_servicio(empleado: empleado){
      this.servicioMensaje.muestra_mensaje("LLAMADO DESDE SERVICIO: El dato agregado es: " + empleado.nombre + " " + empleado.apellido);
      this.empleados.push(empleado);
      this.dataService.guardar_empleados(this.empleados);
  }

  encontrar_empleado(indice: number){
    let empleado : empleado = this.empleados[indice];
    return empleado;
  }

  actualizar_empleado(indice: number, empleado: empleado){
    let empleadoModificado = this.empleados[indice];

    empleadoModificado.nombre = empleado.nombre;
    empleadoModificado.apellido = empleado.apellido;
    empleadoModificado.cargo = empleado.cargo;
    empleadoModificado.salario = empleado.salario;

    this.dataService.actualizar_empleado(indice, empleado);
  }

  eliminar_empleado(indice:number){
    this.empleados.splice(indice, 1);

    this.dataService.eliminar_empleado(indice);

    this.dataService.guardar_empleados(this.empleados);
  }

  obtener_empleados(){
    return this.dataService.cargar_empleados();
    /*Nos devolvera un observable. permiten operaciones asincronas, en 2do plano, actualiza sin hacer select */
  }

  set_empleados(misEmpleados: empleado[]){
    this.empleados = misEmpleados;
  }
}