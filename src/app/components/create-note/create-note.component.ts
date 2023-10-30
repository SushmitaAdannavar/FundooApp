import { AfterViewInit, Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { IconsComponent } from '../icons/icons.component';
import { NotesService } from 'src/app/services/NotesService/notes.service';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent {

  @Output() refreshEvent = new EventEmitter<any>();


  title!: string;
  description!: string;
  colors: string = '';archive=false;delete=false;
  constructor(private notesService: NotesService) { }

  ngOnInit() {
    this.title = ''; this.description = '';this.colors=''
  }

  show = false;
  forcolor(e: any) {

    this.colors = e;
  }
  forarchive(e:any){
    this.archive=e;
  }
  fordelete(e:any){
    this.delete=e;
  }

  open() {
    this.show = true;


  }
  close() {

    let reqData = {
      title: this.title,
      description: this.description,
      color: this.colors,
      isArchived: this.archive,
      isDeleted:this.delete
    }
    this.show = false;
    this.notesService.createNote(reqData).subscribe((res: any) => {
      console.log(res);
      this.refreshEvent.emit(reqData);
    })
    this.ngOnInit();
  }
}
