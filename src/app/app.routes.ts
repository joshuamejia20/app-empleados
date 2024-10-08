import { Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProyectosComponentComponent } from './proyectos-component/proyectos-component.component';
import { QuienesComponentComponent } from './quienes-component/quienes-component.component';
import { ContactoComponentComponent } from './contacto-component/contacto-component.component';

export const routes: Routes = [
    {path: "", component: HomeComponentComponent},
    {path: "proyectos", component: ProyectosComponentComponent},
    {path:"quienes", component: QuienesComponentComponent},
    {path: "contacto", component: ContactoComponentComponent}
];
