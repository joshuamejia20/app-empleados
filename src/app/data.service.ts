import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { empleado } from "./empleado.models";

@Injectable({
    providedIn: 'root'
})
export class DataServices{
    constructor(private httpClient: HttpClient){}

    guardar_arreglo(empleados: empleado[]){
        this.httpClient.put('https://misempleados2024-default-rtdb.firebaseio.com/datos.json', empleados).subscribe(
            response => console.log("Se han guardado los cambios en firebase"),
            error=>console.log('Error: ' + error)
        );
    }

    cargar_arreglo(){
        return this.httpClient.get('https://misempleados2024-default-rtdb.firebaseio.com/datos.json');
    }

    actualizar_posicion(indice: number, empleado: empleado){
        let url = "https://misempleados2024-default-rtdb.firebaseio.com/datos/" + indice + ".json";

        this.httpClient.put(url, empleado).subscribe(
            response =>console.log("Se ha actualizado el empleado " + response),
            error =>console.log("Error: "+ error)
        );
    }

    eliminar_posicion(indice: number){
        let url = "https://misempleados2024-default-rtdb.firebaseio.com/datos/" + indice + ".json";

        this.httpClient.delete(url).subscribe(
            response => console.log("Se ha eliminado el empleado " + response),
            error => console.log("Error: " + error)
        );
    }
}