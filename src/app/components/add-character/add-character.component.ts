import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogConfig } from "@angular/material";

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent implements OnInit {

  model:any = {};
  @ViewChild('f', {static:false}) characterform:NgForm;
  @Output() addCharacter: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form:NgForm){
    console.log(form.value);
    this.addCharacter.emit(form.value);
    //TODO: add delete call to comics service
  }

}
