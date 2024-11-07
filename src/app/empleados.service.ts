import { Injectable } from "@angular/core";
import { empleado } from "./empleado.models";
import { ServicioEmpleadoService } from "./servicio-empleado.service";
import { DataServices } from "./data.service";

@Injectable({
    providedIn: 'root'
})
export class empleadosService{
    /*empleados: empleado[]=[
        new empleado('Josue','Mejia', 'Ingeniero',5000),
        new empleado('Jared','Garay', 'Jefe',3000),
        new empleado('Juan','Pérez', 'Administrativo',1000),
        new empleado('Maria','Sorto', 'Colaborador',800),
    ];*/

    empleados: empleado[]=[];

    constructor(private servicioMensaje: ServicioEmpleadoService, private dataService: DataServices){}

    agregar_empleado_servicio(empleado:empleado){
        this.servicioMensaje.muestra_mensaje("Nombre ingresado: " + empleado.nombre);
        this.empleados.push(empleado);
        this.dataService.guardar_arreglo(this.empleados);
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

        this.dataService.actualizar_posicion(indice, empleado);
    }

    eliminar_empleado(indice: number){
        this.empleados.splice(indice, 1);
        this.dataService.eliminar_posicion(indice);
        this.dataService.guardar_arreglo(this.empleados);
    }

    obtener_empleados(){
        return this.dataService.cargar_arreglo();//observable -> permite operaciones asincronas en 2do plano, actualizar sin hacer select
    }

    set_empleados(misEmpleados: empleado[]){
        this.empleados = misEmpleados;
    }
}