import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatGridListModule } from '@angular/material/grid-list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComicTileComponent } from './components/comic-tile/comic-tile.component';
import { ComicsComponent } from './components/comics/comics.component';
import { ComicInfoComponent } from './components/comic-info/comic-info.component';
import { CharacterTileComponent } from './components/character-tile/character-tile.component';

@NgModule({
  declarations: [
    AppComponent,
    ComicTileComponent,
    ComicsComponent,
    ComicInfoComponent,
    CharacterTileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
