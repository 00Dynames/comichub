import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComicsComponent } from './components/comics/comics.component';
import { ComicInfoComponent } from './components/comic-info/comic-info.component';

const routes: Routes = [
  { path: '', component: ComicsComponent },
  { path: 'comics/:name', component: ComicInfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
