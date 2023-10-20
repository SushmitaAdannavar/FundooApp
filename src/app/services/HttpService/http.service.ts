import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  BaseURL = 'http://fundoonotes.incubation.bridgelabz.com/api/';



  PostService(url: string, reqBody: object, token: boolean, httpOption: any) {
    console.log("Inside function" + reqBody)
    return this.http.post(this.BaseURL + url, reqBody, token && httpOption);
  }
  GetService(url: string, token: boolean, httpOption: any) {
    return this.http.get(this.BaseURL + url, token && httpOption);
  }

}
