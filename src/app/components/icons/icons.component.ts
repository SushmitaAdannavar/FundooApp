import { Component } from '@angular/core';
import { NotesService } from 'src/app/services/NotesService/notes.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent {

  constructor(private notesService:NotesService){}
  
  delete(){
   
    this.notesService.deleteNote().subscribe((result)=>{
      console.log('result',result);
    })
  }
}
