import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/Services/Note/note.service';

@Component({
  selector: 'app-trashnotes',
  templateUrl: './trashnotes.component.html',
  styleUrls: ['./trashnotes.component.scss']
})
export class TrashnotesComponent implements OnInit{
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
        return result.isTrash==true;
      })
    })
  }
  receiveMessage($event:any){
    console.log("Inside Get All Notes",$event);
    this.GetAllNotes();
  }
}
