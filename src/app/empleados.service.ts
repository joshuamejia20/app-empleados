import { Injectable } from "@angular/core";
import { empleado } from "./empleado.model";
import { ServicioEmpleadoService } from "./servicio-empleado.service";

@Injectable()
export class empleadosService{
    empleados : empleado[] = [
    new empleado("Josue", "Mejia", "Presidente", 5000),
    new empleado("David", "Rivas", "Gerente", 3000),
    new empleado("Febe", "Martinez", "Jefa de Sección", 2500),
    new empleado("Marvin", "Molina", "Decano", 800)
  ];

  constructor(private servicioMensaje: ServicioEmpleadoService){}

  agregar_empleado_servicio(empleado: empleado){
      this.servicioMensaje.muestra_mensaje("LLAMADO DESDE SERVICIO: El dato agregado es: " + empleado.nombre + " " + empleado.apellido);
      this.empleados.push(empleado);
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
  }
}