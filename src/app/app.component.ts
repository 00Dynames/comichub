import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'comichub';
  path:Array<string> = [];

  constructor(private loc:Location){}

  ngOnInit(){
    console.log(this.loc.path()); 
    if (this.loc.path().length != 0){
      this.path = this.loc.path().split("/");
      console.log(this.path);
    }
  }
}
