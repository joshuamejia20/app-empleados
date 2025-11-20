import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  constructor(private loginService: LoginService){

  }

  login(form: NgForm){
    const email = form.value.email;
    const password = form.value.password;
    this.loginService.login(email, password);
  }

}
