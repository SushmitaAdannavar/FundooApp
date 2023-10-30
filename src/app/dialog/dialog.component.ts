import { Component,Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CollaboratorsComponent } from '../components/collaborators/collaborators.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {

  constructor( public dialogRef: MatDialogRef<CollaboratorsComponent>){}

  close(){
    this.dialogRef.close()
  }
}
