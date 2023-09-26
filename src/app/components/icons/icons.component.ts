import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NotesService } from 'src/app/services/NotesService/notes.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent {
@Output() eventarchive=new EventEmitter<any>();
  @Input() lists:any;
  bool1=true;bool2!:boolean;bool3!: boolean;bool4!: boolean;bool5!: boolean;bool6!: boolean;bool7!: boolean;
  colorType!: string;showc=false;
  show=false;id:any;
  constructor(private notesService:NotesService){}
  
  delete(){
    
    console.log(this.lists.id)
    let data = {
      noteIdList: [this.lists.id],
      isDeleted: true,
    }
    this.notesService.deleteNote(data).subscribe((result)=>{
      console.log('result',result);
      this.eventarchive.emit(data);
    })
  }
  archive(){
    let data = {
      noteIdList: [this.lists.id],
      isArchived: true,
    }
    this.notesService.ArchiveNote(data).subscribe((result)=>{
      console.log('result',result);
      this.eventarchive.emit(data);
    })
  }
  colorpallette(){
  this.show=true;
  
  }
  more(){
    this.showc=true
  }

  colortype(button:any,colors:string){
    if(button=='bool1'){this.bool1=true;this.bool2=false;this.bool3=false;this.bool4=false;this.bool5=false;this.bool6=false}
    else if(button=='bool2'){this.bool2=true;this.bool1=false;this.bool3=false;this.bool4=false;this.bool5=false;this.bool6=false;this.bool7=false;}
    else if(button=='bool3'){this.bool3=true;this.bool1=false;this.bool2=false;this.bool4=false;this.bool5=false;this.bool6=false;this.bool7=false;}
    else if(button=='bool4'){this.bool4=true;this.bool1=false;this.bool3=false;this.bool2=false;this.bool5=false;this.bool6=false;this.bool7=false;}
    else if(button=='bool5'){this.bool5=true;this.bool1=false;this.bool3=false;this.bool4=false;this.bool2=false;this.bool6=false;this.bool7=false;}
    else if(button=='bool6'){this.bool6=true;this.bool1=false;this.bool3=false;this.bool4=false;this.bool5=false;this.bool2=false;this.bool7=false;}
    else if(button=='bool7'){this.bool6=false;this.bool1=false;this.bool3=false;this.bool4=false;this.bool5=false;this.bool2=false;this.bool7=true;}
    
    this.colorType=colors;
    this.id=this.lists.id;
    console.log(this.lists.id,this.colorType)
    let data = {
      noteIdList: [this.lists.id],
      color:this.colorType,
    }
    this.notesService.colorNote(data).subscribe((result)=>{
      console.log('result',result);
      this.eventarchive.emit(data);
    })
  }
}
