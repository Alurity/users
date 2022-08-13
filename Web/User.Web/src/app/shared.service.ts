import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly route = 'http://localhost:5171/';

	constructor(private html: HttpClient) { }

	getDepList(): Observable<any> {
		return this.html.get<any>(this.route+'api/department');
	}
}
