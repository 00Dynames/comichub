import { Component, OnInit } from '@angular/core';
import { Comic } from '../models/Comic'
import { ComicsService } from '../comics.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {

  comics: Comic[] = [];
  selectedComic?: Comic;

  constructor(private comicsService:ComicsService) { }

  ngOnInit(): void {
    this.getComicData();
  }

  getComicData(): void {
    this.comicsService.getComicData().subscribe(comics => this.comics = comics);
  }

  onSelect(comic: Comic): void {
    this.selectedComic = comic;
  }

}
