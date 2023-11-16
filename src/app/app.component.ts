import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ngOnInit():void{
    firebase.initializeApp({
      apiKey: "AIzaSyDld4YoAxsMBfHAFWZZ866yo5AVAb9WqN0",
      authDomain: "misempleados-42beb.firebaseapp.com"
    })
  }
  
}
