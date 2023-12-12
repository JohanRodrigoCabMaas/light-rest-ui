import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablePageComponent } from './pages/table-page/table-page.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { RegisterMesaComponent } from 'app/components/register-mesa/register-mesa.component';

const routes: Routes = [
	{
		path: '',
		component: TablePageComponent
	}
];

@NgModule({
	declarations: [TablePageComponent, RegisterMesaComponent],
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		FormsModule,
		MatDialogModule,
		MatButtonModule,
		ReactiveFormsModule
	]
})
export class TablesModule {}
