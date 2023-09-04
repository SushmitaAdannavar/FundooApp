import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  signupForm!:FormGroup;
  submitted=false;

  constructor(private formBuilder:FormBuilder,private router:Router){}

  ngOnInit(){
    this.signupForm=this.formBuilder.group({
      firstName:['',Validators.required],
      lastNamw:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, {
      validators: MustMatch('password', 'confirmPassword')
    });
  }
  signup(){
    
    console.log(this.signupForm.value);
    this.router.navigate(['/login']);

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

