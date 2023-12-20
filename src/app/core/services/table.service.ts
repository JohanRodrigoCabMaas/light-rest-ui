import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { ServerResponse } from '@app-core/interface/serverResponse.interface';

@Injectable({
	providedIn: 'root'
})
export class TableService {
	private apiUrl = 'http://localhost:3000/tables';

	constructor(private http: HttpClient) {}

	createTable(tableData: any): Observable<any> {
		return this.http.post<any>(this.apiUrl, tableData);
	}
	getAllTables(): Observable<any[]> {
		return this.http.get<ServerResponse>(this.apiUrl).pipe(map((response) => response.data));
	}
	updateTable(id: number, updatedData: any): Observable<any> {
		const url = `${this.apiUrl}/${id}`;
		return this.http.patch<ServerResponse>(url, updatedData).pipe(map((response) => response.data));
	}
	deleteTable(id: number): Observable<any> {
		const url = `${this.apiUrl}/${id}`;
		return this.http.delete<ServerResponse>(url).pipe(map((response) => response.data));
	}
}
