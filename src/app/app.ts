import { Component, OnInit } from '@angular/core';
/*import { FormsModule } from '@angular/forms';*/
import { RouterOutlet } from '@angular/router';
/*import { empleado } from './empleado.model';
import { CommonModule } from '@angular/common';
import { EmpleadoHijoC } from "./empleado-hijo-c/empleado-hijo-c";
import { ServicioEmpleado } from './servicio-empleado';
import { empleadosService } from './empleados.service';*/
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyD-8sN6n8V8TSBdio3PEcafg2BH3RLL97I",
      authDomain: "misempleados2025.firebaseapp.com",
    })
  }
}
