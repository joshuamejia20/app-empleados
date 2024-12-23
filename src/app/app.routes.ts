import { Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProyectosComponentComponent } from './proyectos-component/proyectos-component.component';
import { QuienesComponentComponent } from './quienes-component/quienes-component.component';
import { ContactoComponentComponent } from './contacto-component/contacto-component.component';
import { ActualizaComponentComponent } from './actualiza-component/actualiza-component.component';
import { ErrorPersonalizadoComponent } from './error-personalizado/error-personalizado.component';
import { LoginComponent } from './login/login.component';
import { LoginGuardian } from './login/login-guardian';

export const routes: Routes = [
    {path: "", component: HomeComponentComponent},
    {path: "proyectos", component: ProyectosComponentComponent, canActivate: [LoginGuardian]},
    {path:"quienes", component: QuienesComponentComponent},
    {path: "contacto", component: ContactoComponentComponent},
    {path:"actualiza/:id", component: ActualizaComponentComponent},
    {path: "login", component: LoginComponent},
    {path: "**", component: ErrorPersonalizadoComponent}
];
