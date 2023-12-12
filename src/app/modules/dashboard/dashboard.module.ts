import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { RouterModule, Routes } from '@angular/router';
import { NgChartsModule } from 'ng2-charts';

const routes: Routes = [
	{
		path: '',
		component: DashboardPageComponent
	}
];

@NgModule({
	declarations: [DashboardPageComponent],
	imports: [CommonModule, NgChartsModule, RouterModule.forChild(routes)]
})
export class DashboardModule {}
