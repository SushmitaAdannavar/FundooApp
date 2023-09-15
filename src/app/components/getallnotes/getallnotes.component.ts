import { Component,OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/NotesService/notes.service';

@Component({
  selector: 'app-getallnotes',
  templateUrl: './getallnotes.component.html',
  styleUrls: ['./getallnotes.component.scss']
})
export class GetallnotesComponent {
  NoteList!: Array<any>;
  title!: string;
  NotesList!: Array<any>;

  constructor(private notesService:NotesService){

  }

 ngOnInit(): void{
  this.notesService.getallNote().subscribe((res:any)=>{
    console.log("get notes success",res.data.data[0].title)
   this.NoteList=res.data.data;
    
    this.NotesList=this.NoteList.filter((val)=>{
      return val.isDeleted==false && val.isArchived==false;
    })
    console.log(this.NotesList);
  })
  }

  forrefresh(e:any)
  {
    this.ngOnInit();
  }
  forarchive(e:any){
    this.ngOnInit();
  }
}
