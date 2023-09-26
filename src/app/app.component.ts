import { Component } from '@angular/core';
import { empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de Empleados';

  cuadroNombre: string = "";
  cuadroApellido: string = "";
  cuadroCargo: string = "";
  cuadroSalario: number = 0;

  empleados : empleado[] = [
    new empleado("Josue", "Mejia", "Presidente", 5000),
    new empleado("David", "Rivas", "Gerente", 3000),
    new empleado("Febe", "Martinez", "Jefa de Sección", 2500),
    new empleado("Marvin", "Molina", "Decano", 800)
  ];

  agregar_empleado(){
    let miEmpleado = new empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);

    this.empleados.push(miEmpleado);
  }
}
