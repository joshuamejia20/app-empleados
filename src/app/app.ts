import { Component, OnInit } from '@angular/core';
/*import { FormsModule } from '@angular/forms';*/
import { RouterOutlet } from '@angular/router';
/*import { empleado } from './empleado.model';
import { CommonModule } from '@angular/common';
import { EmpleadoHijoC } from "./empleado-hijo-c/empleado-hijo-c";
import { ServicioEmpleado } from './servicio-empleado';
import { empleadosService } from './empleados.service';*/
import firebase from 'firebase/compat/app';
import { DataServices } from './data.services';
import { LoginService } from './login/login.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyD-8sN6n8V8TSBdio3PEcafg2BH3RLL97I",
      authDomain: "misempleados2025.firebaseapp.com",
    })
  };

  constructor(private loginService: LoginService){}

  estaLogueado(){
    return this.loginService.estaLogueado();
  }

  logout(){
    this.loginService.logout();
  }
  
}
