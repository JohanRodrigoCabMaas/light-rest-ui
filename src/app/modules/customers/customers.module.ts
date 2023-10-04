import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersPageComponent } from './pages/customers-page/customers-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		component: CustomersPageComponent
	}
];

@NgModule({
	declarations: [CustomersPageComponent],
	imports: [CommonModule, RouterModule.forChild(routes)]
})
export class CustomersModule {}
