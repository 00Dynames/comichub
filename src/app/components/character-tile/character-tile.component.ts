import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../../models/Character';

@Component({
  selector: 'app-character-tile',
  templateUrl: './character-tile.component.html',
  styleUrls: ['./character-tile.component.css']
})
export class CharacterTileComponent implements OnInit {

  @Input() character:Character;

  constructor() { }

  ngOnInit() {
  }

}
