import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServerResponse } from '@app-core/interface/serverResponse.interface';
import { Observable, map } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class CustomerService {
	private apiUrl = 'http://localhost:3000/customers';
	constructor(private http: HttpClient) {}

	registerCustomer(customerData: any): Observable<any> {
		return this.http.post<any>(this.apiUrl, customerData);
	}
	getCustomers(): Observable<any[]> {
		return this.http.get<ServerResponse>(this.apiUrl).pipe(map((response) => response.data));
	}
}
