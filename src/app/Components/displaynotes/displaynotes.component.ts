import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from 'src/app/Services/Data/data.service';
import { UpdatenotesComponent } from '../updatenotes/updatenotes.component';

@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrls: ['./displaynotes.component.scss']
})
export class DisplaynotesComponent implements OnInit{
filterNote:any;
  constructor(public dialog:MatDialog,private data:DataService)
  {

  }
  @Input() noteslist:any;
  @Output() displayToGetAllNoteEvent = new EventEmitter<string>();
  @Output() updateEvent =new EventEmitter<string>();
  message : any;

  ngOnInit(): void {
    this.data.incomingData.subscribe((Response)=>
    {
      console.log("Search In Progress",Response);
      this.filterNote=Response;
    })
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
