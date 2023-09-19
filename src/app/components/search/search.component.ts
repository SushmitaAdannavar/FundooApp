import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/NotesService/notes.service';
import { DataService } from 'src/app/services/dataService/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit{
  message!:string;
  NoteList!: Array<any>;
  NotesList!: Array<any>;re:any;
  constructor(private dataService:DataService,private notesService:NotesService){}

  ngOnInit(){
  this.dataService.currentMessage.subscribe((message )=>
  {
     this.message = message;
     
     this.notesService.getallNote().subscribe((res:any)=>{
      console.log("get notes success",res.data.data[0].title)
     this.NoteList=res.data.data;
     if(this.message.length>0){
      this.NotesList=this.NoteList.filter((val)=>{
        let resulttitle = val.title.match(`${this.message}`,`g`);
        let resultdesc=val.description.match(`${this.message}`,`g`);
        return this.message==resulttitle || this.message==resultdesc ;
      })}else{
      this.NotesList=[];
    }
    })
     
  })

  
  }

}
