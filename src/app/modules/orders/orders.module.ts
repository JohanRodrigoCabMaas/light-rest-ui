import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersPageComponent } from './pages/orders-page/orders-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		component: OrdersPageComponent
	}
];

@NgModule({
	declarations: [OrdersPageComponent],
	imports: [CommonModule, RouterModule.forChild(routes)]
})
export class OrdersModule {}
