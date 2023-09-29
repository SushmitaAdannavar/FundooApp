import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NotesService } from 'src/app/services/NotesService/notes.service';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { UpdatenoteComponent } from '../updatenote/updatenote.component';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit{
  NotesList!: Array<any>;
  title!: string;
  

  @Input() childMessage!: Array<any>;
  @Input() childMessage1!:boolean ;
  @Input() childMessage2!:boolean;
  @Output() refresharchive=new EventEmitter<any>();
  

  constructor(private notesService:NotesService,public dialog:MatDialog){

  }

  ngOnInit(): void {
    console.log(this.childMessage)
    
  }

  openDialog(list:any): void {
    console.log('clicked',list.title)
    const dialogRef = this.dialog.open(UpdatenoteComponent, {
      data: list,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.refresharchive.emit(this.childMessage);
     
    });
  }
  
  forarchive(e:any)
  {
    this.refresharchive.emit(this.childMessage);
  }
}
