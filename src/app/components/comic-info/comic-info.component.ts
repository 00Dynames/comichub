import { Component, OnInit, Input } from '@angular/core';
import { Comic } from '../../models/Comic';
import { Character } from '../../models/Character';
import { ComicsService } from '../../services/comics.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comic-info',
  templateUrl: './comic-info.component.html',
  styleUrls: ['./comic-info.component.css']
})
export class ComicInfoComponent implements OnInit {
  
  comic:Comic;
  id:number;

  constructor(private comicsservice:ComicsService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = +params.get("id");
    });
    
    this.getComic(this.id);
  }

  getComic(id:number){
    this.comicsservice.getComicData().subscribe(comics => {
      this.comic = comics.filter(c => c.id == this.id)[0];
    });
  }

}
