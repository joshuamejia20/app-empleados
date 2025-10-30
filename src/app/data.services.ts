import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { empleado } from "./empleado.model";

@Injectable({
    providedIn: 'root'
})

export class DataServices{
    constructor(private httpClient: HttpClient){

    }

    guardar_empleado(empleados: empleado[]){
        this.httpClient.post('https://misempleados2025-default-rtdb.firebaseio.com/datos.json', empleados).subscribe(
            response=>console.log("Se han guardado los empleados"),
            error=>console.log('Error ' + error)
        )
    }
}