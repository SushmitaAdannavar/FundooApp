import { Component } from '@angular/core';
import { NotesService } from 'src/app/services/NotesService/notes.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent {

  NoteList!: Array<any>;
  NotesList!: Array<any>;
  constructor(private notesService:NotesService){}

  ngOnInit(): void{
    this.notesService.getallNote().subscribe((res:any)=>{
      console.log("get notes success",res.data.data[0].title)
     this.NoteList=res.data.data;
      console.log(this.NoteList)
      
      this.NotesList=this.NoteList.filter((val)=>{
        return val.isDeleted==true;
      })
      console.log(this.NotesList);
    })
    }

    forarchive(e:any){
      this.ngOnInit();
    }
}
