import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../Http/http.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  token:any;
  constructor(private httpService:HttpService) {this.token=localStorage.getItem('token') }

  AddNotes(reqData:any)
  {
    let header={
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.postServiceReset('/Note/AddNotes',reqData,true,header);
  }

  GetAllNotes(){
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' +this.token
      })
    }
    return this.httpService.getService('/Note/GetAllNotes',true,header);
  }

  UpdateNotes(reqData:any)
  {
    let header={
      headers:new HttpHeaders({
        'Content-Type':'Application/json',
        'Authorization':'Bearer '+ this.token
      })
    }
    return this.httpService.putService('/Note/UpdateNotes?NoteId='+reqData.noteId,reqData,true,header);
  }

  TrashNotes(reqData:any)
  {
    let header={
      headers:new HttpHeaders({
        'Content-Type':'Application/json',
        'Authorization':'Bearer '+ this.token
      })
    }
    return this.httpService.putService('/Note/IsTrash?NoteId='+reqData.noteId,reqData,true,header);
  }

  ArchiveNotes(reqData:any)
  {
    let header={
      headers:new HttpHeaders({
        'Content-Type':'Application/json',
        'Authorization':'Bearer '+ this.token
      })
    }
    return this.httpService.putService('/Note/IsArchive?NoteId='+reqData.noteId,reqData,true,header);
  }

  DeleteNote(reqData:any)
  {
    let header={
      headers:new HttpHeaders({
        'Content-Type':'Application/json',
        'Authorization':'Bearer '+ this.token
      })
    }
    return this.httpService.deleteService("/Note/DeleteTrashedNote?NoteId="+reqData.noteId,reqData,true,header);
  }
}
