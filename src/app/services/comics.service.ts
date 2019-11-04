import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Comic } from '../models/Comic';

@Injectable({
  providedIn: 'root'
})
export class ComicsService {

  constructor(private http:HttpClient) { }

  getComicData(): Observable<Comic[]>{
	  return this.http.get<Comic[]>('https://propertymecomics.s3.amazonaws.com/comics');
  }

  //TODO: add character to a comic
  //TODO: delete character from a comic
}
