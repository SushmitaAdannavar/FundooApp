import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {

  
  constructor() { }

  gettoken(){  
    return localStorage.getItem('token')!=null;  
    } 

    logout(){
      console.log("remove item")
      localStorage.removeItem('token')
    }
}
