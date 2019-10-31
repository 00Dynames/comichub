import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { Character } from '../../models/Character';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-delete-character',
  templateUrl: './delete-character.component.html',
  styleUrls: ['./delete-character.component.css']
})
export class DeleteCharacterComponent implements OnInit {

  character:Character;
  @Output() deleteCharacter = new EventEmitter();

  constructor(
    public dialogRef: MatDialogRef<DeleteCharacterComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }

  onYes(){
  //console.log(this.data.character);
    this.deleteCharacter.emit(this.data.character);
  }

}
