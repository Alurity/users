import { environment } from './../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable, InjectionToken, Injector } from '@angular/core';
import { inject } from '@angular/core/testing';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
	readonly baseUrl = environment.API_URL;
	constructor(private http: HttpClient) { }

	getDepartmentsList(): Observable<any> {
		return this.http.get<any>(this.baseUrl+'department');
	}
}
