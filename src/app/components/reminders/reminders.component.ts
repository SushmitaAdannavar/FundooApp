import { Component } from '@angular/core';
import { NotesService } from 'src/app/services/NotesService/notes.service';

@Component({
  selector: 'app-reminders',
  templateUrl: './reminders.component.html',
  styleUrls: ['./reminders.component.scss']
})
export class RemindersComponent {

  NoteList!: Array<any>;
  showicons:boolean=true;
  NotesList!: Array<any>;
  constructor(private notesService:NotesService){}

  ngOnInit(): void{
    this.notesService.getallNote().subscribe((res:any)=>{
      console.log("get notes success",res.data.data[0].title)
     this.NoteList=res.data.data;
      console.log(this.NoteList)
      this.NotesList=this.NoteList.filter((val)=>{
        return val.reminder.length>0 ;
      })
      console.log(this.NotesList);
    })
    }

    forarchive(e:any){
      this.ngOnInit();
    }
}

