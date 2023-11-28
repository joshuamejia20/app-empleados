import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { LoginService } from "./login.service";
import Swal from "sweetalert2";

@Injectable()
export class LoginGuardian implements CanActivate{
    constructor(private loginService: LoginService, private router: Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        if(this.loginService.estaLogueado()){
            return true;
        }else{
            Swal.fire({
            title: "NO TIENES ACCESO. LOGUEATE",
            showDenyButton: false,
            showCancelButton: false,
            }).then((result) => {
                this.router.navigate(['login']);
            });
            return false;
        }
    }
}