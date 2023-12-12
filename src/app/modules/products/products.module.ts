import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { RouterModule, Routes } from '@angular/router';
import { RegisterProductComponent } from 'app/components/register-product/register-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CustomerSelectionComponent } from 'app/components/customer-selection/customer-selection.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

const routes: Routes = [
	{
		path: '',
		component: ProductsPageComponent
	}
];

@NgModule({
	declarations: [ProductsPageComponent, RegisterProductComponent, CustomerSelectionComponent],
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		FormsModule,
		MatDialogModule,
		MatButtonModule,
		MatSnackBarModule,
		MatListModule,
		MatIconModule,
		ReactiveFormsModule
	]
})
export class ProductsModule {}
