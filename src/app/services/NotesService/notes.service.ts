import { Injectable } from '@angular/core';
import { HttpService } from '../HttpService/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  token:any;

  constructor(private httpService:HttpService) { }

  createNote(reqdata:any){

    this.token=localStorage.getItem('token')
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
         Authorization:this.token 
      })
    };
    return this.httpService.PostService('notes/addNotes', reqdata, true, httpOptions)
  }

  getallNote(){

    this.token=localStorage.getItem('token')
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
         Authorization:this.token 
      })
    };
    return this.httpService.GetService('notes/getNotesList', true, httpOptions)
  }

  deleteNote(data:any){

  this.token=localStorage.getItem('token')

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
         Authorization:this.token
      })
    };
    return this.httpService.PostService('notes/trashNotes',data, true, httpOptions)
  }
  deleteNotePermanent(data:any){
    this.token=localStorage.getItem('token')

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
         Authorization:this.token
      })
    };
    return this.httpService.PostService('notes/deleteForeverNotes',data, true, httpOptions)
  }
  ArchiveNote(data:any){

    this.token=localStorage.getItem('token')
  
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
           Authorization:this.token
        })
      };
      return this.httpService.PostService('notes/archiveNotes',data, true, httpOptions)
    }
  UpdateNote(data:any){

    this.token=localStorage.getItem('token')
    
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
            Authorization:this.token
        })
      };
      return this.httpService.PostService('notes/updateNotes',data, true, httpOptions)
    }

  colorNote(data:any){

    this.token=localStorage.getItem('token')
      
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
            Authorization:this.token
          })
      };
      return this.httpService.PostService('notes/changesColorNotes',data, true, httpOptions)
    }



}
