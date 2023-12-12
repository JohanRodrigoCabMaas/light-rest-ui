import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfigurationService } from '@app-core/services/configurations.service';

@Component({
	selector: 'app-informacion-empresa',
	templateUrl: './informacion-empresa.component.html',
	styleUrls: ['./informacion-empresa.component.scss']
})
export class InformacionEmpresaComponent implements OnInit {
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
	registerInfo() {
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
			this.configurationService.registerInformacion(infoData).subscribe(
				(response) => {
					console.log('Informacion guardada', response);
				},
				(error) => {
					console.error('error al guardar la informacion', error);
				}
			);
		} else {
			console.log('formulario invalido, por davor completa todos los campos');
		}
	}
}
