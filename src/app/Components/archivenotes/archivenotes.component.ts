import { Component } from '@angular/core';
import { NoteService } from 'src/app/Services/Note/note.service';

@Component({
  selector: 'app-archivenotes',
  templateUrl: './archivenotes.component.html',
  styleUrls: ['./archivenotes.component.scss']
})
export class ArchivenotesComponent {
  notesArray:any;

  constructor(private notes:NoteService){}
  
    ngOnInit(): void {
      this.GetAllNotes();
    }
  
    GetAllNotes()
    {
      this.notes.GetAllNotes().subscribe((response:any)=>
      {
        console.log(response);
        this.notesArray=response.data;
        console.log("Stored In Array");
        console.log(this.notesArray);
        this.notesArray.reverse();
        this.notesArray=this.notesArray.filter((result:any)=>{
          return result.isArchive==true;
        })
      })
    }
    receiveMessage($event:any){
      console.log("Inside Get All Notes",$event);
      this.GetAllNotes();
    }
}
