import { Component, OnInit } from '@angular/core';
import { Comic } from '../../models/Comic';
import { ComicsService } from '../../services/comics.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {
  comics:Comic[];
  
  constructor(private comicsservice:ComicsService) { }

  ngOnInit() {
    this.comicsservice.getComicData().subscribe(comics => {
      this.comics = comics;
      console.log(this.comics);
    });
  }
}
