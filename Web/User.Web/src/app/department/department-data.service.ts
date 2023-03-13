import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Department } from './department.models';

@Injectable({providedIn: 'root'})

export class DepartmentDataService {
	readonly baseUrl = environment.API_URL;
	constructor (private http: HttpClient) {
}

	getDepartmentsList(): Observable<Department> {
		console.log('new service');
		return this.http.get<Department>(this.baseUrl+'department');
	}
}