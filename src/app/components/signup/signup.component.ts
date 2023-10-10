import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/UserService/user.service';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  signupForm!:FormGroup;
  submitted=false;
  hide=true;

  constructor(private formBuilder:FormBuilder,private router:Router,private userService:UserService){}

  ngOnInit(){
    this.signupForm=this.formBuilder.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, {
      validators: MustMatch('password', 'confirmPassword')
    });
  }
  signup(){
    // this.router.navigate(['/login']);
    let requestData={
      firstName:this.signupForm.value.firstName,
      lastName:this.signupForm.value.lastName,
      service:"advance",
      email:this.signupForm.value.email,
      password:this.signupForm.value.password
    }

    this.userService.signupService(requestData).subscribe((result:any)=>{
      console.log('result',result);
    });this.router.navigate(['/login']);


  }
}


function MustMatch(arg0: string, arg1: string){
  return (group: AbstractControl) => {
    const control = group.get(arg0);
    const matchingControl = group.get(arg1);

    if (!control || !matchingControl) {
        return null;
    }
    if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
        return null;
    }
    if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
    } else {
        matchingControl.setErrors(null);
    }
    return null;
}
}

