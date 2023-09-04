import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent {
  loginForm!:FormGroup;
  submitted=false;

  constructor(private formBuilder:FormBuilder,private router:Router){}

  ngOnInit(){
    this.loginForm=this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
    });
  }
  next(){
    console.log(this.loginForm.value);
    this.router.navigate(['/resetpassword']);
  }
}
