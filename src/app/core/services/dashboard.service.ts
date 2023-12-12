import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServerResponse } from '@app-core/interface/serverResponse.interface';
import { Observable, map } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class DashboardService {
	private apiUrl = 'http://localhost:3000/dashboard';
	constructor(private http: HttpClient) {}

	saveDate(dashboardData: any): Observable<any> {
		return this.http.post<any>(this.apiUrl, dashboardData);
	}
	getDate(): Observable<any[]> {
		return this.http.get<ServerResponse>(this.apiUrl).pipe(map((response) => response.data));
	}
}
