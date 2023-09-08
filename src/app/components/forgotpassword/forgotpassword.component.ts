import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/UserService/user.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent {
  loginForm!:FormGroup;
  submitted=false;
  email!: string;

  constructor(private formBuilder:FormBuilder,private router:Router,private userService:UserService){}

  ngOnInit(){
    this.loginForm=this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
    });
    
  }
  next(){
    console.log(this.loginForm.value);
    let requestdata={
      service:"advance",
      email:this.loginForm.value.email
    }

    this.userService.forgotpasswordService(requestdata).subscribe((result:any)=>{
      console.log('result',result);
      this.router.navigate(['/resetpassword']);
    });



    

  }
}
