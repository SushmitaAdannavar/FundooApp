import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/NotesService/notes.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit{
  NotesList!: Array<any>;
  title!: string;

  constructor(private notesService:NotesService){

  }

  ngOnInit(): void {
    this.notesService.getallNote().subscribe((res:any)=>{
      console.log("get notes success",res.data.data[0].title)
     this.NotesList=res.data.data;
      
      })
  }
  
}
