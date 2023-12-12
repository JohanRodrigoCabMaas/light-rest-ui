import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '@app-core/services/auth/auth.service';
import { CustomerService } from '@app-core/services/customer.service';
import { RegistroCustomerComponent } from 'app/components/registro-customer/registro-customer.component';

@Component({
	selector: 'app-customers-page',
	templateUrl: './customers-page.component.html',
	styleUrls: ['./customers-page.component.scss']
})
export class CustomersPageComponent implements OnInit {
	customers: any[] = [];
	selectedCustomer: any = null;
	searchTerm: string = '';
	constructor(public dialog: MatDialog, private customerService: CustomerService, public authService: AuthService) {}

	ngOnInit() {
		this.getCustomers();
	}
	openDialog(): void {
		const dialogRef = this.dialog.open(RegistroCustomerComponent, {
			width: '1000px'
		});

		dialogRef.afterClosed().subscribe((result) => {
			console.log(`Diálogo cerrado con resultado: ${result}`);
			this.getCustomers();
		});
	}
	getCustomers(): void {
		this.customerService.getCustomers().subscribe(
			(data) => {
				this.customers = data;
			},
			(error) => {
				console.error('Error al cargar clientes', error);
			}
		);
	}
	toggleDetails(customer: any): void {
		if (this.searchTerm !== '') {
			// Reinicia la propiedad isExpanded de todos los clientes cuando se realiza una búsqueda
			this.customers.forEach((c) => (c.isExpanded = false));
		}
		customer.isExpanded = !customer.isExpanded;
	}
	filterCustomers(): any[] {
		return this.customers.filter((customer) => {
			return (
				customer.firstName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
				customer.lastName.toLowerCase().includes(this.searchTerm.toLowerCase())
			);
		});
	}
	isAdmin(): boolean {
		// Verificar si el usuario actual tiene el rol de "admin"
		return this.authService.currentRole === 'admin';
	}
}
