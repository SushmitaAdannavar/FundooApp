import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/UserService/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm!:FormGroup;
  submitted=false;
  hide=false;

  constructor(private formBuilder:FormBuilder,private userService:UserService,private router:Router){}

  ngOnInit(){
    this.loginForm=this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]]
    });
  }
  login(){
    console.log(this.loginForm.value);
    let requestdata={
      service:"advance",
      email:this.loginForm.value.email,
      password:this.loginForm.value.password
    }

    this.userService.loginService(requestdata).subscribe((result:any)=>{
      console.log('result',result);
      localStorage.setItem('token',result.id);
      this.router.navigate(['/home/notes'])
    });
  }
}
