import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

@Injectable()
export class LoginService{
    constructor(private router: Router){}

    token: string;

    login(email: string, password: string){
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(
            response=>{
                firebase.auth().currentUser?.getIdToken()
                .then(
                    token=>{
                        this.token=token;
                        this.router.navigate(['/']);
                    }
                )
            }
        )
    }

    getIdToken(){
        return this.token;
    }

    estaLogueado(){
        console.log(this.token);
        return this.token;
    }

    logout(){
        firebase.auth().signOut().then(()=>{
            this.token = "";
            this.router.navigate(['/']);
        })
    }
}