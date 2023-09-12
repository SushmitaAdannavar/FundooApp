import {Component, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { NotesService } from 'src/app/services/NotesService/notes.service';

@Component({
  selector: 'app-updatenote',
  templateUrl: './updatenote.component.html',
  styleUrls: ['./updatenote.component.scss']
})
export class UpdatenoteComponent {
  title:any;
  description:any;
  id:any;

  constructor(private notesService:NotesService,
    public dialogRef: MatDialogRef<UpdatenoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    if(data){
      this.title=data.title,
      this.description=data.description,
      this.id=data.id
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  close(){
    console.log(this.id,this.title,this.description)
    let reqData={
      noteId: this.id,
       title:this.title,
       description:this.description
    }
    this.notesService.UpdateNote(reqData).subscribe((res:any)=>{
      console.log(res); 
      this.dialogRef.close();
    }) 
   }
}
