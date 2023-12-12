import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfigurationService } from '@app-core/services/configurations.service';

@Component({
	selector: 'app-actualizar-info',
	templateUrl: './actualizar-info.component.html',
	styleUrls: ['./actualizar-info.component.scss']
})
export class ActualizarInfoComponent implements OnInit {
	configurationForm: FormGroup;

	constructor(private configurationService: ConfigurationService, private fb: FormBuilder) {}

	ngOnInit(): void {
		this.configurationForm = this.fb.group({
			nameCompany: [null, Validators.required],
			phoneNumber: [null, Validators.required],
			address: [null, Validators.required],
			city: [null, Validators.required],
			state: [null, Validators.required],
			postalCode: [null, Validators.required],
			country: [null, Validators.required],
			description: [null, Validators.required]
		});
	}
	updateInfo() {
		if (this.configurationForm.valid) {
			const infoData = {
				nameCompany: this.configurationForm.value.nameCompany,
				phoneNumber: this.configurationForm.value.phoneNumber,
				address: this.configurationForm.value.address,
				city: this.configurationForm.value.city,
				state: this.configurationForm.value.state,
				postalCode: this.configurationForm.value.postalCode,
				country: this.configurationForm.value.country,
				description: this.configurationForm.value.description
			};

			// Obtén el ID de la información que deseas actualizar (puedes obtenerlo de alguna manera en tu aplicación)
			const infoId = 1; // Reemplaza con la lógica para obtener el ID

			this.configurationService.updateInfo(infoId, infoData).subscribe(
				(response) => {
					// Aquí asumo que el servicio devuelve la estructura con la propiedad "data"
					console.log('Informacion actualizada', response.data);
				},
				(error) => {
					console.error('Error al actualizar la informacion', error);
				}
			);
		} else {
			console.log('Formulario inválido, por favor completa todos los campos');
		}
	}
}
