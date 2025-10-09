import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proyectos-component',
  imports: [],
  templateUrl: './proyectos-component.html',
  styleUrl: './proyectos-component.css'
})
export class ProyectosComponent {
  constructor(private router: Router){

  }
  volverHome(){
    this.router.navigate(['']);
  }
}
