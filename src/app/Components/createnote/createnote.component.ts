import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NoteService } from 'src/app/Services/Note/note.service';

@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.scss']
})
export class CreatenoteComponent {
  @Output() createEvent=new EventEmitter<string>;
  show = false;
  ImgOne = true;
  ImgTwo = false;

  hideAndShow() {
    this.show = !this.show;
    this.ImgOne = false;
    this.ImgTwo = true;
  }

  token: any;
  createnote!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private note: NoteService, private activeRoute: ActivatedRoute) { }


  ngOnInit(): void {
    this.createnote = this.formBuilder.group({
      title: ['', Validators.required],
      note: ['', Validators.required]
    })
    this.token = this.activeRoute.snapshot.paramMap.get('token');
    console.log(this.token);

  }

  OnSubmit(){
    this.show = !this.show;
    this.ImgOne = true;
    this.ImgTwo = false;
    this.submitted=true;
    if(this.createnote.valid)
    {
      let reqData={
        title:this.createnote.value.title,
        note:this.createnote.value.note
      }
      console.log(reqData);
      this.note.AddNotes(reqData).subscribe((response:any)=>{
        console.log(response);
        this.createEvent.emit(response);
      })
    }
  }

}