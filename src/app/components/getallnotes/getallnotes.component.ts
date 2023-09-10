import { Component,OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/NotesService/notes.service';

@Component({
  selector: 'app-getallnotes',
  templateUrl: './getallnotes.component.html',
  styleUrls: ['./getallnotes.component.scss']
})
export class GetallnotesComponent {
  NotesList!: Array<any>;
  title!: string;

  constructor(private notesService:NotesService){

  }

 ngOnInit(): void{
  this.notesService.getallNote().subscribe((res:any)=>{
    console.log("get notes success",res.data.data[0].title)
   this.NotesList=res.data.data;
    
    })
  }
}
