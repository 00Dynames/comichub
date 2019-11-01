import { Component, OnInit, Input } from '@angular/core';
import { Comic } from '../../models/Comic';
import { Character } from '../../models/Character';
import { ComicsService } from '../../services/comics.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { AddCharacterComponent } from "../add-character/add-character.component";

@Component({
  selector: 'app-comic-info',
  templateUrl: './comic-info.component.html',
  styleUrls: ['./comic-info.component.css']
})
export class ComicInfoComponent implements OnInit {
  
  comic:Comic;
  name:string;

  constructor(
    private comicsservice:ComicsService, 
    private route:ActivatedRoute,
    private dialog:MatDialog
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.name = params.get("name");
    });

    this.getComic(this.name);
  }

  getComic(name:string){
    this.comicsservice.getComicData().subscribe(comics => {
      this.comic = comics.filter(c => c.slug == this.name)[0];
    });
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;

    let dialogRef = this.dialog.open(AddCharacterComponent, dialogConfig);
    
    dialogRef.componentInstance.addCharacter.subscribe(result => {
      this.addCharacter(result);
      dialogRef.close([]);
    });
  }

  addCharacter(c:Character){
    console.log("ADD EVENT");
    this.comic.characters.unshift(c);
  }

  deleteCharacter(c:Character){
    console.log("DELETE EVENT");
    this.comic.characters = this.comic.characters.filter(character => character != c);
  }
}
