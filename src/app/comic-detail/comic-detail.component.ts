import { Component, OnInit, Input } from '@angular/core';
import { Comic } from '../models/Comic'
import { Character } from '../models/Character'

@Component({
  selector: 'app-comic-detail',
  templateUrl: './comic-detail.component.html',
  styleUrls: ['./comic-detail.component.css']
})
export class ComicDetailComponent implements OnInit {

  @Input() comic?: Comic;
  selectedCharacter?: Character;

  constructor() { }

  ngOnInit(): void {
  }

  onSelectCharacter(character: Character): void {
    this.selectedCharacter = character;
  }
}
