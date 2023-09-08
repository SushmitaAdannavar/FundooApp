import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/UserService/user.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent {

  loginForm!:FormGroup;
  submitted=false;
  hide=true;

  constructor(private formBuilder:FormBuilder,private userService:UserService){}

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
    let requestdata={
      service:"advance",
      password:this.loginForm.value.password
    }

    this.userService.resetpasswordService(requestdata).subscribe((result:any)=>{
      console.log('result',result);
    });
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

