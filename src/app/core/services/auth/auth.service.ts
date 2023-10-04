import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { ACCESS_TOKEN } from '@app-core/const/token-key.const';
import jwt_decode from 'jwt-decode';
import { TokenResponse } from '@app-core/interface/token.response';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	constructor(private _httpCliente: HttpClient) {}

	login(email: string, password: string): Observable<any> {
		return this._httpCliente.post(`api/auth/login`, { email, password }).pipe(
			map((tokenResponse: TokenResponse) => {
				if (!tokenResponse?.access_token) {
					return null;
				}

				const { access_token } = tokenResponse;
				localStorage.setItem(ACCESS_TOKEN, JSON.stringify(access_token));
				const { user } = jwt_decode(access_token) as any;
				return user;
			})
		);
	}
}
