import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NotesService } from 'src/app/services/NotesService/notes.service';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { CollaboratorsComponent } from '../collaborators/collaborators.component';
import { UpdatenoteComponent } from '../updatenote/updatenote.component';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent {
  @Output() eventarchive = new EventEmitter<any>();
  @Output() eventcolor = new EventEmitter<any>();
  @Output() eventupdatecolor = new EventEmitter<any>();
  @Input() lists: any;
  @Input() iconshow!: boolean;
  @Input() icontrashshow!: boolean; colorval: string = '';
  bool1 = true; bool2!: boolean; bool3!: boolean; bool4!: boolean; bool5!: boolean; bool6!: boolean; bool7!: boolean;
  colorType!: string; showc = false;
  show = false; id: any; iconshowarchive = false; icontrash = false;
  constructor(private notesService: NotesService,public dialog:MatDialog) { }
  ngOnInit() {
    this.iconshowarchive = this.iconshow;
    this.icontrash = this.icontrashshow;
  }

  reminder(val: string) {
    let array: any = [];
    array.push(val);
    let data = {
      noteIdList: [this.lists.id],
      reminder: array,
    }
    this.notesService.reminderNote(data).subscribe((result) => {
      console.log('result', result);
      this.eventarchive.emit(data);
    })
  }

  delete() {

    console.log(this.lists.id)
    let data = {
      noteIdList: [this.lists.id],
      isDeleted: true,
    }
    this.notesService.deleteNote(data).subscribe((result) => {
      console.log('result', result);
      this.eventarchive.emit('true');
    })
  }
  restore() {
    let data = {
      noteIdList: [this.lists.id],
      isDeleted: false,
    }
    this.notesService.deleteNote(data).subscribe((result) => {
      console.log('result', result);
      this.eventarchive.emit(data);
    })
  }
  permanentdelete() {
    let data = {
      noteIdList: [this.lists.id],
      isDeleted: true,
    }
    this.notesService.deleteNotePermanent(data).subscribe((result) => {
      console.log('result', result);
      this.eventarchive.emit(data);
    })
  }
  archive() {
    let data = {
      noteIdList: [this.lists.id],
      isArchived: true,
    }
    this.notesService.ArchiveNote(data).subscribe((result) => {
      console.log('result', result);
      this.eventarchive.emit('true');
    })
  }
  unarchive() {
    let data = {
      noteIdList: [this.lists.id],
      isArchived: false,
    }
    this.notesService.ArchiveNote(data).subscribe((result) => {
      console.log('result', result);
      this.eventarchive.emit(data);
    })
  }
  colorpallette() {
    this.show = true;

  }
  more() {
    this.showc = true
  }
  collaborator() {
    const dialogRef = this.dialog.open(CollaboratorsComponent, {
      data: this.lists,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.refresharchive.emit(this.childMessage);
     
    });
  }

  colortype(button: any, colors: string) {
    console.log("color clicked")
    if (button == 'bool1') { this.bool1 = true; this.bool2 = false; this.bool3 = false; this.bool4 = false; this.bool5 = false; this.bool6 = false }
    else if (button == 'bool2') { this.bool2 = true; this.bool1 = false; this.bool3 = false; this.bool4 = false; this.bool5 = false; this.bool6 = false; this.bool7 = false; }
    else if (button == 'bool3') { this.bool3 = true; this.bool1 = false; this.bool2 = false; this.bool4 = false; this.bool5 = false; this.bool6 = false; this.bool7 = false; }
    else if (button == 'bool4') { this.bool4 = true; this.bool1 = false; this.bool3 = false; this.bool2 = false; this.bool5 = false; this.bool6 = false; this.bool7 = false; }
    else if (button == 'bool5') { this.bool5 = true; this.bool1 = false; this.bool3 = false; this.bool4 = false; this.bool2 = false; this.bool6 = false; this.bool7 = false; }
    else if (button == 'bool6') { this.bool6 = true; this.bool1 = false; this.bool3 = false; this.bool4 = false; this.bool5 = false; this.bool2 = false; this.bool7 = false; }
    else if (button == 'bool7') { this.bool6 = false; this.bool1 = false; this.bool3 = false; this.bool4 = false; this.bool5 = false; this.bool2 = false; this.bool7 = true; }

    this.colorType = colors;
    this.colorval = this.colorType;
    this.eventcolor.emit(this.colorType)
    this.eventupdatecolor.emit(this.colorType)
    console.log(this.colorval)
    this.id = this.lists.id;
    this.colorval = this.colorType;
    console.log(this.colorval)
    console.log(this.lists.id, this.colorType)
    let data = {
      noteIdList: [this.lists.id],
      color: this.colorType,
    }
    this.notesService.colorNote(data).subscribe((result) => {
      console.log('result', result);
      this.eventarchive.emit(data);
    })
  }
}
