import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/Services/Note/note.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit{
  notesArray:any;
  isArchive=false;
  isTrash=false;
  
  constructor(private note: NoteService){}

  ngOnInit(): void {
    this.OnSubmit();
  }

  OnSubmit(){
    this.note.GetAllNotes().subscribe((response:any)=>
    {
      console.log(response);
      this.notesArray=response.data;
      console.log("Stored In Array");
      console.log(this.notesArray);
      this.notesArray.reverse();
      this.notesArray=this.notesArray.filter((result:any)=>{
        return result.isArchive==false && result.isTrash==false;
      })
    })
  }
  receiveMessage($event:any){
    this.OnSubmit();
  }
}
