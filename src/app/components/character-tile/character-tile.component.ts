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

  constructor(private dialog:MatDialog) { }

  ngOnInit() {
  }

  openDeleteConfirm() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
 
    this.dialog.open(DeleteCharacterComponent, dialogConfig);
  }

}
