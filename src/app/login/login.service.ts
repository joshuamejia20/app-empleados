import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { CookieService } from "ngx-cookie-service";

@Injectable(
    {
        providedIn: 'root'
    }
)
export class LoginService {
    constructor(private router: Router, private cookies: CookieService){}
    token: string;

    login(email:string, password:string){
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(
            response=>{
                firebase.auth().currentUser?.getIdToken()
                .then(
                    token =>{
                        this.token = token;
                        this.cookies.set('token', token);
                        this.router.navigate(['inicio']);
                    },
                    error=>{
                        console.log("Error al obtener el token" + error);
                    }
                )
            }
        )
    }

    getIdToken(){
        //return this.token;
        return this.cookies.get('token');
    }

    estaLogueado(){
        //console.log(this.token);
        //return this.token;
        return this.cookies.get('token');
    }

    logout(){
        firebase.auth().signOut()
        .then(
            ()=>{
                this.token = '';
                this.cookies.delete('token');
                this.router.navigate(['login']);
            }
        )
    }
}