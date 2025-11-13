import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { empleado } from "./empleado.model";
import { lastValueFrom } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class DataServices{
    constructor(private httpClient: HttpClient){

    }

    guardar_empleado(empleados: empleado[]){
        this.httpClient.put('https://misempleados2025-default-rtdb.firebaseio.com/datos.json', empleados).subscribe(
            response=>console.log("Se han guardado los empleados"),
            error=>console.log('Error ' + error)
        )
    }

    cargar_empleados(){
        return this.httpClient.get('https://misempleados2025-default-rtdb.firebaseio.com/datos.json')
    }

    actualizar_empleado(indice: number, empleado: empleado): Promise<any>{
        let url = 'https://misempleados2025-default-rtdb.firebaseio.com/datos/' + indice + '.json';
        const observable = this.httpClient.put(url, empleado);

        return lastValueFrom(observable);
        /*this.httpClient.put(url, empleado).subscribe(
            response=>console.log('Se ha actualizado el empleado' +  response),
            error => console.log('Error: ' + error)
        );*/
    }

    eliminar_empleado(indice: number){
        let url = 'https://misempleados2025-default-rtdb.firebaseio.com/datos/' + indice + '.json';
        this.httpClient.delete(url).subscribe(
            response =>console.log('Se ha eliminado el empleado' + response),
            error => console.log('Error: ' + error)
        );
    }
}