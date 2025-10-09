import { Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { ProyectosComponent } from './proyectos-component/proyectos-component';
import { QuienesComponent } from './quienes-component/quienes-component';
import { ContactoComponent } from './contacto-component/contacto-component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "proyectos", component: ProyectosComponent},
    {path: "quienes", component: QuienesComponent},
    {path: "contacto",  component: ContactoComponent}
];
