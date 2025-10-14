import { Injectable } from "@angular/core";
import { empleado } from "./empleado.model";
import { ServicioEmpleado } from "./servicio-empleado";
@Injectable({
  providedIn: 'root'
})
export class empleadosService{
    empleados: empleado[] = [
        new empleado("Josue", "Mejia", "Jefe", 99999.99),
        new empleado("Jared", "Garay", "Director", 1000),
        new empleado("Juan", "Pérez", "Administrativo", 800),
        new empleado("Maria", "Sorto", "Colaboradora", 500)
    ];

    constructor(private servicioMensaje: ServicioEmpleado){

    }

    agregar_empleado(empleado:empleado){
        this.empleados.push(empleado);
        this.servicioMensaje.muestra_mensaje("nombre: " + empleado.nombre + "\n apellido: " + empleado.apellido);
    }

    encontrar_empleado(indice:number){
        let empleado: empleado = this.empleados[indice];
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