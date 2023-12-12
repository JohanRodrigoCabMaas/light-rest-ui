// auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '@app-core/services/auth/auth.service';

@Injectable({
	providedIn: 'root'
})
export class AuthGuard implements CanActivate {
	constructor(private authService: AuthService, private router: Router) {}

	canActivate(): boolean {
		if (this.authService.isLoggedIn()) {
			return true;
		} else {
			// No autenticado, redirigir a la página de login
			this.router.navigate(['/login']);
			return false;
		}
	}
}
