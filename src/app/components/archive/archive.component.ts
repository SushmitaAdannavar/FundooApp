import { Component } from '@angular/core';
import { NotesService } from 'src/app/services/NotesService/notes.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent {

  NoteList!: Array<any>;
  NotesList!: Array<any>;
  constructor(private notesService:NotesService){}

  ngOnInit(): void{
    this.notesService.getallNote().subscribe((res:any)=>{
      console.log("get notes success",res.data.data[0].title)
     this.NoteList=res.data.data;
      console.log(this.NoteList)
      
      this.NotesList=this.NoteList.filter((val)=>{
        return val.isArchived==true;
      })
      console.log(this.NotesList);
    })
    }
}
