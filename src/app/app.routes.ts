import { Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { ProyectosComponent } from './proyectos-component/proyectos-component';
import { QuienesComponent } from './quienes-component/quienes-component';
import { ContactoComponent } from './contacto-component/contacto-component';
import { ActualizaComponent } from './actualiza-component/actualiza-component';
import { ErrorPersonalizado } from './error-personalizado/error-personalizado';
import { Login } from './login/login';
import { LoginGuardian } from './login/login-guardian';

export const routes: Routes = [
    {path: "", component: Login},
    {path: "inicio", component: HomeComponent},
    {path: "proyectos", component: ProyectosComponent},
    {path: "quienes", component: QuienesComponent},
    {path: "contacto",  component: ContactoComponent, canActivate: [LoginGuardian]},
    {path: "actualiza/:id", component: ActualizaComponent},
    {path: 'login', component: Login},
    {path: "**", component: ErrorPersonalizado}
];
