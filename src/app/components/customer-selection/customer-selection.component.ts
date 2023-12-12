import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
	selector: 'app-customer-selection',
	templateUrl: './customer-selection.component.html',
	styleUrls: ['./customer-selection.component.scss']
})
export class CustomerSelectionComponent {
	customers: any[] = [];
	@Output() customerSelected = new EventEmitter<any>();
	constructor(public dialogRef: MatDialogRef<CustomerSelectionComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
		this.customers = data.customers;
	}

	selectCustomer(customer: any): void {
		this.customerSelected.emit(customer);
		this.dialogRef.close(customer);
	}
}
