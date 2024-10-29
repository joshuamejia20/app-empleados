import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { empleado } from "./empleado.models";

@Injectable({
    providedIn: 'root'
})
export class DataServices{
    constructor(private httpClient: HttpClient){}

    guardar_arreglo(empleados: empleado[]){
        this.httpClient.post('https://misempleados2024-default-rtdb.firebaseio.com/datos.json', empleados).subscribe(
            response => console.log("Se han guardado los cambios en firebase"),
            error=>console.log('Error: ' + error)
        );
    }
}