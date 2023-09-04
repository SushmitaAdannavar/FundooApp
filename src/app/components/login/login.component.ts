import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm!:FormGroup;
  submitted=false;

  constructor(private formBuilder:FormBuilder){}

  ngOnInit(){
    this.loginForm=this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]]
    });
  }
  login(){
    console.log(this.loginForm.value);
  }
}
