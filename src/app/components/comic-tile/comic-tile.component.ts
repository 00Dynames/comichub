import { Component, OnInit, Input } from '@angular/core';
import { Comic } from '../../models/Comic';

@Component({
  selector: 'app-comic-tile',
  templateUrl: './comic-tile.component.html',
  styleUrls: ['./comic-tile.component.css']
})
export class ComicTileComponent implements OnInit {
  
  @Input() comic:Comic;

  constructor() { }

  ngOnInit() {
		console.log(this.comic);  
  }

}
