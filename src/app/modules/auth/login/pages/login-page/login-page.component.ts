import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '@app-core/models/user';
import { AuthService } from '@app-core/services/auth/auth.service';

@Component({
	selector: 'app-login-page',
	templateUrl: './login-page.component.html',
	styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
	loginForm: FormGroup;
	errorMessage = '';

	constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
		this.loginForm = this.fb.group({
			username: ['', [Validators.required]],
			password: ['', Validators.required],
			role: ['', Validators.required]
		});
	}

	onSubmit() {
		if (this.loginForm.invalid) {
			console.error('Invalid login form');
			return;
		}

		const { username, password, role } = this.loginForm.value;
		this.authService.login(username, password, role).subscribe((user: User) => {
			this.router.navigate(['/dashboard']);
		});
	}
}
