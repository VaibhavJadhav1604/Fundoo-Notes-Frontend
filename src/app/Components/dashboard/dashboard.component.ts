import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Services/Data/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
constructor(private data:DataService){}
  search(event:any)
  {
    console.log(event.target.value)
    this.data.outgoingData(event.target.value)
  }
}
