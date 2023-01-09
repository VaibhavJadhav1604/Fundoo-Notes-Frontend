import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoteService } from 'src/app/Services/Note/note.service';
import { ArchivenotesComponent } from '../archivenotes/archivenotes.component';
import { TrashnotesComponent } from '../trashnotes/trashnotes.component';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit{
@Input() trashnotecard:any;
@Output() iconEvent = new EventEmitter<string>();
constructor(private notes:NoteService,private route:ActivatedRoute){}

istrash:boolean=false;
isarchive:boolean=false;
  ngOnInit(): void {
    let comp = this.route.snapshot.component;

    if(comp == TrashnotesComponent){
      this.istrash = true;
    } 

    if(comp == ArchivenotesComponent){
      this.isarchive = true;
    } 
  }

  trashnote()
  {
    let reqData={
    noteId:[this.trashnotecard.noteId],
    }

    console.log(reqData);
    this.notes.TrashNotes(reqData).subscribe((Response:any)=>
    {
      console.log(Response);
      this.iconEvent.emit(Response);
    })
  }

  restorenote()
  {
    let reqData={
    noteId:[this.trashnotecard.noteId],
    }

    console.log(reqData);
    this.notes.TrashNotes(reqData).subscribe((Response:any)=>
    {
      console.log(Response);
      this.iconEvent.emit(Response);
    })
  }

  deletenote()
  {
    let reqData={
      noteId:[this.trashnotecard.noteId],
    }

    console.log(reqData);
    this.notes.DeleteNote(reqData).subscribe((Response:any)=>
    {
      console.log(Response);
      this.iconEvent.emit(Response);
    })
  }

  archivenote()
  {
    let reqData={
    noteId:[this.trashnotecard.noteId],
    }

    console.log(reqData);
    this.notes.ArchiveNotes(reqData).subscribe((Response:any)=>
    {
      console.log(Response);
      this.iconEvent.emit(Response);
    })
  }

  unarchivenote()
  {
    let reqData={
    noteId:[this.trashnotecard.noteId],
    }

    console.log(reqData);
    this.notes.ArchiveNotes(reqData).subscribe((Response:any)=>
    {
      console.log(Response);
      this.iconEvent.emit(Response);
    })
  }
}
