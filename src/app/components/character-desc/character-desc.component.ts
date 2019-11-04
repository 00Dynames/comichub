import { Component, OnInit, Inject } from '@angular/core';
import { Character } from '../../models/Character';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-character-desc',
  templateUrl: './character-desc.component.html',
  styleUrls: ['./character-desc.component.css']
})
export class CharacterDescComponent implements OnInit {

  character:Character;

  constructor(
    public dialogRef: MatDialogRef<CharacterDescComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any
    ) { 
      this.character = this.data.character; 
    }

  ngOnInit() {
  }

}
