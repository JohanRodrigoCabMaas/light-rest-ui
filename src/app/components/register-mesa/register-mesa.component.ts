import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TableService } from '@app-core/services/table.service';

@Component({
	selector: 'app-register-mesa',
	templateUrl: './register-mesa.component.html',
	styleUrls: ['./register-mesa.component.scss']
})
export class RegisterMesaComponent implements OnInit {
	mesaForm: FormGroup;

	constructor(private tableService: TableService, private fb: FormBuilder) {}

	ngOnInit() {
		this.mesaForm = this.fb.group({
			size: [null, Validators.required],
			type: [null, Validators.required],
			numberOfChairs: [null, Validators.required]
		});
	}

	registerTable() {
		if (this.mesaForm.valid) {
			const defauld = '#71E687';
			const tableData = {
				size: this.mesaForm.value.size,
				type: this.mesaForm.value.type,
				numberOfChairs: this.mesaForm.value.numberOfChairs,
				color: defauld
			};

			this.tableService.createTable(tableData).subscribe(
				(response) => {
					console.log('Registro exitoso:', response);
				},
				(error) => {
					console.error('Error al registrar la mesa:', error);
				}
			);
		} else {
			console.log('Formulario inválido. Por favor, complete todos los campos.');
		}
	}
}
