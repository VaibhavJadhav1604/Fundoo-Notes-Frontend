import { Component, EventEmitter, Output, Inject} from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ɵInjectableAnimationEngine } from '@angular/platform-browser/animations';
import { NoteService } from 'src/app/Services/Note/note.service';

@Component({
  selector: 'app-updatenotes',
  templateUrl: './updatenotes.component.html',
  styleUrls: ['./updatenotes.component.scss']
})
export class UpdatenotesComponent {
  title: any;
  note: any;
  id: any;

  constructor(private notes: NoteService,public dialogRef:MatDialogRef<UpdatenotesComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,) 
   {
    this.title=data.title;
    this.note=data.note;
    this.id=data.noteId;
   }

  CloseDialogBox()
  {
    let data={
      title:this.title,
      note:this.note,
      noteId:this.id
    }
    console.log(data);
    this.notes.UpdateNotes(data).subscribe((response:any)=>
    {
      console.log("update response",response);
    })

    this.dialogRef.close();
  }
}
