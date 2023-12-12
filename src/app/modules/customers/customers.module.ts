import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersPageComponent } from './pages/customers-page/customers-page.component';
import { RouterModule, Routes } from '@angular/router';
import { RegistroCustomerComponent } from 'app/components/registro-customer/registro-customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
	{
		path: '',
		component: CustomersPageComponent
	}
];

@NgModule({
	declarations: [CustomersPageComponent, RegistroCustomerComponent],
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		FormsModule,
		MatDialogModule,
		MatButtonModule,
		ReactiveFormsModule
	]
})
export class CustomersModule {}
