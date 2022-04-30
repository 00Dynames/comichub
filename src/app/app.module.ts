import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComicsComponent } from './comics/comics.component';
import { ComicDetailComponent } from './comic-detail/comic-detail.component';
import { ChracterDetailComponent } from './chracter-detail/chracter-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ComicsComponent,
    ComicDetailComponent,
    ChracterDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
