import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import firebase from 'firebase/compat/app';
import { LoginService } from './login/login.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  providers: [
    
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(private loginService: LoginService){}
  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyDctzmPXQXCdeK3GFEXpvifoF80zsPfNgo",
      authDomain: "misempleados2024.firebaseapp.com"
    });
  }

  estaLogueado(){
    return this.loginService.estaLogueado();
  }

  logout(){
    this.loginService.logout();
  }
}
