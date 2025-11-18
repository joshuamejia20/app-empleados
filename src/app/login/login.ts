import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  login(form: NgForm){
    const email = form.value.email;
    const password = form.value.password;
  }

}
