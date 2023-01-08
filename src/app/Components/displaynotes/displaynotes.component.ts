import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdatenotesComponent } from '../updatenotes/updatenotes.component';

@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrls: ['./displaynotes.component.scss']
})
export class DisplaynotesComponent implements OnInit{

  constructor(public dialog:MatDialog)
  {

  }
  @Input() noteslist:any;
  @Output() displayToGetAllNoteEvent = new EventEmitter<string>();
  @Output() updateEvent =new EventEmitter<string>();
  message : any;

  ngOnInit(): void {

  }

  OpenDialogBox(notes:any)
  {
    const dialogbox=this.dialog.open(UpdatenotesComponent,{
      width:'45%',
      height:'auto',
      data:notes
    })
    dialogbox.afterClosed().subscribe(Response=>{
      console.log("After Update",Response);
      this.updateEvent.emit(Response);
    });
  }

  receivedMessage($event:any)
  {
    console.log("Icons To Display"+$event);
    this.message=$event;
    this.displayToGetAllNoteEvent.emit(this.message);
  }
}
