import { Character } from './Character';

export class Comic {
	id:number;
	slug:string;
	name:string;
	description:string;
	issueNumber:number;
	pages:number;
	price:number;
	releaseDate:Date;
	image:string;
	characters:Array<Character>;
}
