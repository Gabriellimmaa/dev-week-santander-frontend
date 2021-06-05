import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { ILogin } from 'src/app/interfaces/login';
import { AuthService } from '../../../services/auth.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { stringify } from '@angular/compiler/src/util';


@Component({
  selector: 'app-dashboard-panel-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginPageComponent implements OnInit {

  message: string;

  submit(login: string, senha: string) {
    if(login == 'admin' && senha == 'admin') {
      localStorage.setItem('isLoggedIn', "true");
      localStorage.setItem('token', login);
      this.router.navigate(['dashboard']);
    }else{
      this.message = "Login inválido";
    }
  }

  voltar() {
    this.router.navigate(['']);
  }

  constructor(
    private router : Router,
 ) { }

  ngOnInit(): void {
    this.message = "status";
  }

}
