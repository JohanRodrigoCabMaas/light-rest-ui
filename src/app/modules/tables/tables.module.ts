import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablePageComponent } from './pages/table-page/table-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		component: TablePageComponent
	}
];

@NgModule({
	declarations: [TablePageComponent],
	imports: [CommonModule, RouterModule.forChild(routes)]
})
export class TablesModule {}
