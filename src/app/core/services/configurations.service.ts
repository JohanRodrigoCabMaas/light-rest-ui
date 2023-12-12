import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServerResponse } from '@app-core/interface/serverResponse.interface';
import { Observable, map } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ConfigurationService {
	private apiUrl = 'http://localhost:3000/configurations';
	constructor(private http: HttpClient) {}

	registerInformacion(infoData: any): Observable<any> {
		return this.http.post<any>(this.apiUrl, infoData);
	}
	getInfo(): Observable<any[]> {
		return this.http.get<ServerResponse>(this.apiUrl).pipe(map((response) => response.data));
	}
	updateInfo(id: number, updatedData: any): Observable<any> {
		const url = `${this.apiUrl}/${id}`;
		return this.http.patch<ServerResponse>(url, updatedData).pipe(map((response) => response.data));
	}
}
