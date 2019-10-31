import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../../models/Character';
import { DeleteCharacterComponent } from '../delete-character/delete-character.component';
import { MatDialog, MatDialogConfig } from '@angular/material';

@Component({
  selector: 'app-character-tile',
  templateUrl: './character-tile.component.html',
  styleUrls: ['./character-tile.component.css']
})
export class CharacterTileComponent implements OnInit {

  @Input() character:Character;
  isHot:boolean;

  constructor(private dialog:MatDialog) { }

  ngOnInit() {
    this.isHot = this.character.numberOfRoles >= 2000;
  }

  openDeleteConfirm() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.data = { character: this.character };

    let dialogRef = this.dialog.open(DeleteCharacterComponent, dialogConfig);
    const sub = dialogRef.componentInstance.deleteCharacter.subscribe(() => this.deleteCharacter());
  }

  deleteCharacter(){
    console.log("DELETE");
    //TODO: call delete on comic service here
  }

}
