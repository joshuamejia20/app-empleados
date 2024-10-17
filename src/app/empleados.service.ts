import { Injectable } from "@angular/core";
import { empleado } from "./empleado.models";
import { ServicioEmpleadoService } from "./servicio-empleado.service";

@Injectable({
    providedIn: 'root'
})
export class empleadosService{
    empleados: empleado[]=[
        new empleado('Josue','Mejia', 'Ingeniero',5000),
        new empleado('Jared','Garay', 'Jefe',3000),
        new empleado('Juan','Pérez', 'Administrativo',1000),
        new empleado('Maria','Sorto', 'Colaborador',800),
    ];

    constructor(private servicioMensaje: ServicioEmpleadoService){}

    agregar_empleado_servicio(empleado:empleado){
        this.servicioMensaje.muestra_mensaje("Nombre ingresado: " + empleado.nombre);
        this.empleados.push(empleado);
    }

    encontrar_empleado(indice: number){
        let empleado: empleado = this.empleados[indice];
        return empleado;
    }

    actualizar_empleado(indice: number, empleado:empleado){
        let empleadoModificado = this.empleados[indice];
        empleadoModificado.nombre = empleado.nombre;
        empleadoModificado.apellido = empleado.apellido;
        empleadoModificado.cargo = empleado.cargo;
        empleadoModificado.salario = empleado.salario;
    }

    eliminar_empleado(indice: number){
        this.empleados.splice(indice, 1);
    }
}