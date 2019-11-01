import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatGridListModule } from '@angular/material/grid-list';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComicTileComponent } from './components/comic-tile/comic-tile.component';
import { ComicsComponent } from './components/comics/comics.component';
import { ComicInfoComponent } from './components/comic-info/comic-info.component';
import { CharacterTileComponent } from './components/character-tile/character-tile.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';
import { DeleteCharacterComponent } from './components/delete-character/delete-character.component';

@NgModule({
  declarations: [
    AppComponent,
    ComicTileComponent,
    ComicsComponent,
    ComicInfoComponent,
    CharacterTileComponent,
    AddCharacterComponent,
    DeleteCharacterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatGridListModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatToolbarModule
  ],
  entryComponents: [
    AddCharacterComponent,
    DeleteCharacterComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
