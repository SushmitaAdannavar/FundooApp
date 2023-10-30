import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/dialog/dialog.component';
import { NotesService } from 'src/app/services/NotesService/notes.service';

@Component({
  selector: 'app-collaborators',
  templateUrl: './collaborators.component.html',
  styleUrls: ['./collaborators.component.scss']
})
export class CollaboratorsComponent {

  collabForm!: FormGroup
  list: any; name!: any; email!: any; persontoshare = '';
  constructor(public notesService: NotesService, public formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<CollaboratorsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    if (data) {
      this.list = data;
    }
  }
  ngOnInit() {

    this.collabForm = this.formBuilder.group({
      persontoshare: ['', [Validators.required, Validators.email]]
    });

    this.name = localStorage.getItem('name')
    this.email = localStorage.getItem('email')
  }

  cancel() {
    this.dialogRef.close();
  }

  save() {
    if(this.collabForm.invalid){
      return;
    }
    let data = {
      noteIdList: [this.list.id],
      collaborators: this.persontoshare
    }
    this.notesService.noteCollaborators(data).subscribe((result) => {
      console.log('result', result);

    })
    this.dialogRef.close();
  }
}
