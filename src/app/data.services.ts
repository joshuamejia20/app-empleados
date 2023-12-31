import { Injectable } from "@angular/core";
import { empleado } from "./empleado.model";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { LoginService } from "./login/login.service";

@Injectable()
export class DataServices{

    constructor(private httpClient: HttpClient, private router: Router, private loginService: LoginService){}

    guardar_empleados(empleados: empleado[]){
        this.httpClient.put('https://misempleados-42beb-default-rtdb.firebaseio.com/datos.json', empleados).subscribe(
            response=>console.log('Se han guardado los empleados '+ response),
            error=>console.log('Error: ' + error)
        )
    }

    cargar_empleados(){
        const token = this.loginService.getIdToken();

        return this.httpClient.get('https://misempleados-42beb-default-rtdb.firebaseio.com/datos.json?auth='+token);
    }

    actualizar_empleado(indice: number,  empleado: empleado){
        let url = 'https://misempleados-42beb-default-rtdb.firebaseio.com/datos/' + indice + '.json';

        this.httpClient.put(url, empleado).subscribe(
            response => console.log('Se ha actualizado el empleado' + response),
            error => console.log('Error: ' + error)
        );
    }

    eliminar_empleado(indice:number){
        let url = 'https://misempleados-42beb-default-rtdb.firebaseio.com/datos/' + indice + '.json';

        this.httpClient.delete(url).subscribe(
            response => console.log('Se ha eliminado el empleado ' + response),
            error => console.log('error: '+ error)
        )

    }
}