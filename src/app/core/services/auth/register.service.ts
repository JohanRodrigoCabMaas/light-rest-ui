import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { User } from '@app-core/models/user';
import { ServerResponse } from '@app-core/interface/serverResponse.interface';

@Injectable({
	providedIn: 'root'
})
export class RegisterService {
	private apiUrl = 'http://localhost:3000/users';

	constructor(private http: HttpClient) {}

	registerUser(userData: User): Observable<any> {
		return this.http.post<any>(this.apiUrl, userData);
	}
}
