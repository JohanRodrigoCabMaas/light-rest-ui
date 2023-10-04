import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout.component';
import { RouterModule, Routes } from '@angular/router';
import { SidenavComponent } from '@app-shared/components/sidenav/sidenav.component';
import { AngularSvgIconModule, provideAngularSvgIcon } from 'angular-svg-icon';
import { HeaderToolbarComponent } from '@app-shared/components/header-toolbar/header-toolbar.component';

const routes: Routes = [
	{
		path: '',
		component: MainLayoutComponent,
		children: [
			{ path: '', redirectTo: 'dashboard', pathMatch: 'full' },
			{
				path: 'dashboard',
				data: { title: 'Dashboard' },
				loadChildren: () => import('@app-modules/dashboard/dashboard.module').then((m) => m.DashboardModule)
			},
			{
				path: 'customers',
				data: { title: 'Customers' },
				loadChildren: () => import('@app-modules/customers/customers.module').then((m) => m.CustomersModule)
			},
			{
				path: 'tables',
				data: { title: 'Tables' },
				loadChildren: () => import('@app-modules/tables/tables.module').then((m) => m.TablesModule)
			},
			{
				path: 'products',
				data: { title: 'Products' },
				loadChildren: () => import('@app-modules/products/products.module').then((m) => m.ProductsModule)
			},
			{
				path: 'orders',
				data: { title: 'Orders' },
				loadChildren: () => import('@app-modules/orders/orders.module').then((m) => m.OrdersModule)
			},
			{
				path: 'configurations',
				data: { title: 'Configurations' },
				loadChildren: () =>
					import('@app-modules/configurations/configurations.module').then((m) => m.ConfigurationsModule)
			}
		]
	}
];

@NgModule({
	declarations: [MainLayoutComponent],
	imports: [CommonModule, RouterModule.forChild(routes), SidenavComponent, HeaderToolbarComponent]
})
export class MainLayoutModule {}
