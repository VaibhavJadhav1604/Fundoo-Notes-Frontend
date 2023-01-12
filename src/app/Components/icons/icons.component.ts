import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { NoteService } from 'src/app/Services/Note/note.service';
import { ArchivenotesComponent } from '../archivenotes/archivenotes.component';
import { TrashnotesComponent } from '../trashnotes/trashnotes.component';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {

  @Input() trashnotecard: any;
  @Output() iconEvent = new EventEmitter<string>();
  constructor(private notes: NoteService, private route: ActivatedRoute, private snackbar: MatSnackBar) { }

  istrash: boolean = false;
  isarchive: boolean = false;
  ngOnInit(): void {
    let comp = this.route.snapshot.component;

    if (comp == TrashnotesComponent) {
      this.istrash = true;
    }

    if (comp == ArchivenotesComponent) {
      this.isarchive = true;
    }
  }
  Colors: Array<any> =
    [
      { code: '#FF0000', name: 'Red' },
      { code: '#00FFFF', name: 'Aqua' },
      { code: '#FFFF00', name: 'Yellow' },
      { code: '#ADFF2F', name: 'GreenYellow' },
      { code: '#C0C0C0', name: 'Silver' },
      { code: '#FF00FF', name: 'Magenta' },
      { code: '#00FF00', name: 'Green' },
      { code: '#FFA500', name: 'Orange' },
      { code: '#FFFFFF', name: 'White' },
      { code: '#0000FF', name: 'Blue' },
    ]

    setColors(color:any)
    {
      let reqData={
        Color:color.name,
        noteId:this.trashnotecard.noteId
      }
      this.notes.UpdateColor(reqData).subscribe((Response:any)=>
      {
        console.log(Response)
        this.iconEvent.emit(Response);
      })
    }
  trashnote() {
    let reqData = {
      noteId: [this.trashnotecard.noteId],
    }

    console.log(reqData);
    this.notes.TrashNotes(reqData).subscribe((Response: any) => {
      console.log(Response);
      this.iconEvent.emit(Response);
    })
    this.snackbar.open("Note Trashed SuccessFully", '', { duration: 2000 });
  }

  restorenote() {
    let reqData = {
      noteId: [this.trashnotecard.noteId],
    }

    console.log(reqData);
    this.notes.TrashNotes(reqData).subscribe((Response: any) => {
      console.log(Response);
      this.iconEvent.emit(Response);
    })
    this.snackbar.open("Note Restored SuccessFully", '', { duration: 2000 });
  }

  deletenote() {
    let reqData = {
      noteId: [this.trashnotecard.noteId],
    }

    console.log(reqData);
    this.notes.DeleteNote(reqData).subscribe((Response: any) => {
      console.log(Response);
      this.iconEvent.emit(Response);
    })
    this.snackbar.open("Note Deleted SuccessFully", '', { duration: 2000 });
  }

  archivenote() {
    let reqData = {
      noteId: [this.trashnotecard.noteId],
    }

    console.log(reqData);
    this.notes.ArchiveNotes(reqData).subscribe((Response: any) => {
      console.log(Response);
      this.iconEvent.emit(Response);
    })
    this.snackbar.open("Note Archived SuccessFully", '', { duration: 2000 });
  }

  unarchivenote() {
    let reqData = {
      noteId: [this.trashnotecard.noteId],
    }

    console.log(reqData);
    this.notes.ArchiveNotes(reqData).subscribe((Response: any) => {
      console.log(Response);
      this.iconEvent.emit(Response);
    })
    this.snackbar.open("Note UnArchived SuccessFully", '', { duration: 2000 });
  }
}

