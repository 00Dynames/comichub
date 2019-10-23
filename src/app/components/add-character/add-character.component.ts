import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent implements OnInit {

  @ViewChild('f', {static:false}) characterform:NgForm;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form:NgForm){
    console.log(form.value);
    //TODO: store the form data somewhere
    //TODO: add http requests to mock API
  }
}
