import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		component: ProductsPageComponent
	}
];

@NgModule({
	declarations: [ProductsPageComponent],
	imports: [CommonModule, RouterModule.forChild(routes)]
})
export class ProductsModule {}
