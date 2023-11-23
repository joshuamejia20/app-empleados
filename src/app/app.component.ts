import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private loginService: LoginService){}

  ngOnInit():void{
    firebase.initializeApp({
      apiKey: "AIzaSyDld4YoAxsMBfHAFWZZ866yo5AVAb9WqN0",
      authDomain: "misempleados-42beb.firebaseapp.com"
    })
  }

  estaLogueado(){
    return this.loginService.estaLogueado();
  }

  logout(){
    this.loginService.logout();
  }
  
}
