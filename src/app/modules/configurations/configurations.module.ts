import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigutarionsPageComponent } from './pages/configutarions-page/configutarions-page.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { InformacionEmpresaComponent } from 'app/components/informacion-empresa/informacion-empresa.component';
import { ActualizarInfoComponent } from 'app/components/actualizar-info/actualizar-info.component';

const routes: Routes = [
	{
		path: '',
		component: ConfigutarionsPageComponent
	}
];
@NgModule({
	declarations: [ConfigutarionsPageComponent, InformacionEmpresaComponent, ActualizarInfoComponent],
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
export class ConfigurationsModule {}
