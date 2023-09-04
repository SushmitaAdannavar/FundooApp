import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent {

  loginForm!:FormGroup;
  submitted=false;

  constructor(private formBuilder:FormBuilder){}

  ngOnInit(){
    this.loginForm=this.formBuilder.group({
      password:['',[Validators.required,Validators.minLength(6)]],
      confirmpassword:['',Validators.required]
    }, {
      validators: MustMatch('password', 'confirmpassword')
    });
  }
  passwordreset(){
    console.log(this.loginForm.value);
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

