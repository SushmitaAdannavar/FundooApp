import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NotesService } from 'src/app/services/NotesService/notes.service';

@Component({
  selector: 'app-updatenote',
  templateUrl: './updatenote.component.html',
  styleUrls: ['./updatenote.component.scss']
})
export class UpdatenoteComponent {
  title: any;
  description: any;
  id: any;list:any;
  colors: any;show:any;

  constructor(private notesService: NotesService,
    public dialogRef: MatDialogRef<UpdatenoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    if (data) {
      this.title = data.list.title,
        this.description = data.list.description,
        this.id = data.list.id,
        this.colors = data.list.color,
        this.show=data.show,
        this.list=data.list;
    }
  }

  close() {
    console.log(this.id, this.title, this.description, this.colors)
    let reqData = {
      noteId: this.id,
      title: this.title,
      description: this.description,
      color: this.colors
    }
    this.notesService.UpdateNote(reqData).subscribe((res: any) => {
      console.log(res);
      this.dialogRef.close();
    })
  }
  archive() {
    let data = {
      noteIdList: [this.id],
      isArchived: true,
    }
    this.notesService.ArchiveNote(data).subscribe((result) => {
      console.log('result', result);
      this.dialogRef.close();
    })
  }
  forcolor(e: any) {

    this.colors = e;
  }
  delete() {
    console.log(this.id)
    let data = {
      noteIdList: [this.id],
      isDeleted: true,
    }
    this.notesService.deleteNote(data).subscribe((result) => {
      console.log('result', result);
      this.dialogRef.close();
    })
  }
}
