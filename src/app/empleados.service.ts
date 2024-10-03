import { Injectable } from "@angular/core";
import { empleado } from "./empleado.models";
import { ServicioEmpleadoService } from "./servicio-empleado.service";

@Injectable()
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
}