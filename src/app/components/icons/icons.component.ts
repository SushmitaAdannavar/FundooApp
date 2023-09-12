import { Component, Input } from '@angular/core';
import { NotesService } from 'src/app/services/NotesService/notes.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent {

  @Input() lists:any;
  constructor(private notesService:NotesService){}
  
  delete(){
    console.log(this.lists.id)
    let data = {
      noteIdList: [this.lists.id],
      isDeleted: true,
    }
    this.notesService.deleteNote(data).subscribe((result)=>{
      console.log('result',result);
    })
  }
  archive(){
    let data = {
      noteIdList: [this.lists.id],
      isArchived: true,
    }
    this.notesService.ArchiveNote(data).subscribe((result)=>{
      console.log('result',result);
    })
  }
}
