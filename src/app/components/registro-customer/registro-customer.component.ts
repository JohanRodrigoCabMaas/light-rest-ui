import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '@app-core/services/customer.service';

@Component({
	selector: 'app-registro-customer',
	templateUrl: './registro-customer.component.html',
	styleUrls: ['./registro-customer.component.scss']
})
export class RegistroCustomerComponent implements OnInit {
	customerForm: FormGroup;

	constructor(private customerService: CustomerService, private fb: FormBuilder) {}

	ngOnInit() {
		this.customerForm = this.fb.group({
			firstName: [null, Validators.required],
			lastName: [null, Validators.required],
			email: [null, [Validators.required, Validators.email]],
			phoneNumber: [null, Validators.required],
			address: [null, Validators.required],
			city: [null, Validators.required],
			state: [null, Validators.required],
			postalCode: [null, Validators.required],
			country: [null, Validators.required]
		});
	}

	registerCustomer() {
		if (this.customerForm.valid) {
			const customerData = {
				firstName: this.customerForm.value.firstName,
				lastName: this.customerForm.value.lastName,
				email: this.customerForm.value.email,
				phoneNumber: this.customerForm.value.phoneNumber,
				address: this.customerForm.value.address,
				city: this.customerForm.value.city,
				state: this.customerForm.value.state,
				postalCode: this.customerForm.value.postalCode,
				country: this.customerForm.value.country
			};

			this.customerService.registerCustomer(customerData).subscribe(
				(response) => {
					console.log('Registro exitoso:', response);
					// Puedes manejar la respuesta de la API aquí según tus necesidades
				},
				(error) => {
					console.error('Error al registrar el customer:', error);
					// Puedes manejar los errores aquí según tus necesidades
				}
			);
		} else {
			console.log('Formulario inválido. Por favor, complete todos los campos correctamente.');
		}
	}
}
