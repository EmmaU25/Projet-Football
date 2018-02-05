import { Injectable} from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/Operator/map';
import { ligueModel } from '../models/ligueModel'


@Injectable()
export class LiguesServices{
	constructor(public http: Http){}

	getLigues():Observable<ligueModel[]>{
		const headers = new Headers();
        headers.append('X-AUTH-TOKEN', 'f6b3ae25342242f8b76a233c4c781686');
        headers.append('Access-Control-Allow-Headers', 'Content-Type');
        headers.append('Access-Control-Allow-Methods', 'GET');
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Content-Type: application/json','charset=UTF-8');

		return this.http.get('http://api.football-data.org/v1/competitions/?season=2017', {headers: headers})
		.map((res:any) => res.json() as ligueModel[]);
	}
}