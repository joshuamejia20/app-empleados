import { Injectable } from "@angular/core";
import { empleado } from "./empleado.model";
import { ServicioEmpleado } from "./servicio-empleado";
import { DataServices } from "./data.services";
@Injectable({
  providedIn: 'root'
})
export class empleadosService{
    /*empleados: empleado[] = [
        new empleado("Josue", "Mejia", "Jefe", 99999.99),
        new empleado("Jared", "Garay", "Director", 1000),
        new empleado("Juan", "Pérez", "Administrativo", 800),
        new empleado("Maria", "Sorto", "Colaboradora", 500)
    ];*/

    empleados: empleado[] = [];

    constructor(private servicioMensaje: ServicioEmpleado, private dataService: DataServices){

    }

    agregar_empleado(empleado:empleado){
        this.empleados.push(empleado);
        this.dataService.guardar_empleado(this.empleados);
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

    eliminar_empleado(indice: number){
        this.empleados.splice(indice, 1);
    }

    obtener_empleados(){
        return this.dataService.cargar_empleados();
        /* nos devuelve un observable, permiten operaciones asincronas , en 2do plano, actualiza sin hacer un select*/
    }

    set_empleados(misEmpleados: empleado[]){
        this.empleados = misEmpleados;
    }
}