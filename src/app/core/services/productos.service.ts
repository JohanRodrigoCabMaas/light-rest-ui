import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { ServerResponse } from '@app-core/interface/serverResponse.interface';

@Injectable({
	providedIn: 'root'
})
export class ProductRegistrationService {
	private apiUrl = 'http://localhost:3000/products';

	constructor(private http: HttpClient) {}

	registerProduct(productData: any) {
		return this.http.post(this.apiUrl, productData);
	}
	getProducts(): Observable<any[]> {
		return this.http.get<ServerResponse>(this.apiUrl).pipe(map((response) => response.data));
	}
}
