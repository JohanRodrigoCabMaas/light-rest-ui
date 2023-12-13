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
	currentUser: any;
	currentRole: string;
	constructor(private _httpCliente: HttpClient) {}

	login(username: string, password: string, role: string): Observable<any> {
		return this._httpCliente.post(`api/auth/login`, { username, password, role }).pipe(
			map((tokenResponse: TokenResponse) => {
				if (!tokenResponse?.access_token) {
					return null;
				}

				const { access_token } = tokenResponse;
				localStorage.setItem(ACCESS_TOKEN, JSON.stringify(access_token));
				localStorage.setItem('userRole', role);
				localStorage.setItem('username', username);
				this.currentRole = role;
				this.currentUser = jwt_decode(access_token) as any; // Almacena la información del usuario
				return this.currentUser;
			})
		);
	}
	isLoggedIn(): boolean {
		// Verifica si el token de acceso está presente
		return !!localStorage.getItem(ACCESS_TOKEN);
	}

	logout(): void {
		// Elimina el token de acceso y realiza cualquier otra limpieza necesaria al cerrar sesión
		localStorage.removeItem(ACCESS_TOKEN);
		localStorage.removeItem('userRole');
		localStorage.removeItem('username');
		this.currentUser = null;
		this.currentRole = null;
	}
	getEmail(): string {
		return localStorage.getItem('username') || '';
	}
	gettipo(): string {
		return localStorage.getItem('userRole') || '';
	}
}
