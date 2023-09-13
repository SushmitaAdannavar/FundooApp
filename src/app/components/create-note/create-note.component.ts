import { Component } from '@angular/core';
import { NotesService } from 'src/app/services/NotesService/notes.service';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent {

  title!: string;
  description!: string;

  constructor(private notesService:NotesService){}

   show=false;
   open(){
    this.show=true;
   }
   close(){

    let reqData={
       title:this.title,
       description:this.description
    }
    this.show=false;
    this.notesService.createNote(reqData).subscribe((res:any)=>{
      console.log(res); 
    }) 
   }
}
