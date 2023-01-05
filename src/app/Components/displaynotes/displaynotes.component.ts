import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrls: ['./displaynotes.component.scss']
})
export class DisplaynotesComponent implements OnInit{
  @Input() noteslist:any;
  @Output() displayToGetAllNoteEvent = new EventEmitter<string>();

  message : any;

  ngOnInit(): void {

  }

  receivedRefreshEvent($event:any)
  {
    console.log("Icons To Display"+$event);
    this.message=$event;
    this.displayToGetAllNoteEvent.emit(this.message);
  }
}
