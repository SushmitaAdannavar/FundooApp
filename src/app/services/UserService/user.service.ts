import { Injectable } from '@angular/core';
import { HttpService } from '../HttpService/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService: HttpService) { }

  signupService(reqdata: any) {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        //  Authorization:'my-auth-token' jwt
      })
    };
    return this.httpService.PostService('user/userSignUp', reqdata, false, httpOptions)
  }
  loginService(reqdata: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        //  Authorization:'my-auth-token'
      })
    };
    return this.httpService.PostService('user/login', reqdata, false, httpOptions)
  }
  forgotpasswordService(reqdata: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        //  Authorization:'my-auth-token'
      })
    };
    return this.httpService.PostService('user/reset', reqdata, false, httpOptions)
  }
  resetpasswordService(reqdata: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        //  Authorization:'my-auth-token'
      })
    };
    return this.httpService.PostService('user/reset-password', reqdata, false, httpOptions)
  }
}
