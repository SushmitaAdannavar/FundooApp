import { Component, Input, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/NotesService/notes.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit{
  NotesList!: Array<any>;
  title!: string;

  @Input() childMessage!: Array<any>;

  constructor(private notesService:NotesService){

  }

  ngOnInit(): void {
    
  }
  
}
