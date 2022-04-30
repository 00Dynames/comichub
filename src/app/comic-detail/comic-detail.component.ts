import { Component, OnInit, Input } from '@angular/core';
import { Comic } from '../models/Comic'

@Component({
  selector: 'app-comic-detail',
  templateUrl: './comic-detail.component.html',
  styleUrls: ['./comic-detail.component.css']
})
export class ComicDetailComponent implements OnInit {

  @Input() comic?: Comic;

  constructor() { }

  ngOnInit(): void {
  }

}
