// order.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { ServerResponse } from '@app-core/interface/serverResponse.interface';

@Injectable({
	providedIn: 'root'
})
export class OrderService {
	private apiUrl = 'http://localhost:3000/orders';

	constructor(private http: HttpClient) {}

	getOrders(): Observable<any[]> {
		return this.http.get<ServerResponse>(this.apiUrl).pipe(map((response) => response.data));
	}

	createOrder(orderData: any): Observable<any> {
		return this.http.post<any>(this.apiUrl, orderData);
	}
}
