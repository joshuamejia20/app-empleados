import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proyectos-component',
  standalone: true,
  imports: [],
  providers:[Router],
  templateUrl: './proyectos-component.component.html',
  styleUrl: './proyectos-component.component.css'
})
export class ProyectosComponentComponent {

  constructor(private router: Router){}

  volverHome(){
    this.router.navigate(['']);
  }
}
