import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '@app-core/models/user';
import { RegisterService } from '@app-core/services/auth/register.service';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
	registerForm: FormGroup;
	errorMessage: string = '';

	constructor(private fb: FormBuilder, private registerService: RegisterService, private router: Router) {
		this.registerForm = this.fb.group({
			username: ['', [Validators.required]],
			email: ['', [Validators.required, Validators.email]],
			password: ['', [Validators.required, Validators.minLength(6)]],
			fullName: ['', [Validators.required]],
			role: ['', [Validators.required]]
		});
	}

	onSubmit() {
		if (this.registerForm.valid) {
			const formData = this.registerForm.value as User;

			this.registerService.registerUser(formData).subscribe(
				(response) => {
					console.log('Registro exitoso:', response);
					this.router.navigate(['/login']);
					this.registerForm.reset();
				},
				(error) => {
					console.error('Error en el registro:', error);
					this.errorMessage = 'Hubo un error en el registro. Por favor, inténtalo de nuevo.';
				}
			);
		} else {
			this.errorMessage = 'Por favor, complete todos los campos correctamente.';
		}
	}
}
