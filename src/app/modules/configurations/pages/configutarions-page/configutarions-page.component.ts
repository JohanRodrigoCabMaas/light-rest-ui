import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from '@app-core/services/auth/auth.service';
import { ConfigurationService } from '@app-core/services/configurations.service';
import { ActualizarInfoComponent } from 'app/components/actualizar-info/actualizar-info.component';
import { InformacionEmpresaComponent } from 'app/components/informacion-empresa/informacion-empresa.component';

@Component({
	selector: 'app-configutarions-page',
	templateUrl: './configutarions-page.component.html',
	styleUrls: ['./configutarions-page.component.scss']
})
export class ConfigutarionsPageComponent implements OnInit {
	infoData: any[] = [];
	primeraVezRegistrado: boolean = false;
	constructor(
		public dialog: MatDialog,
		private configurationService: ConfigurationService,
		private authService: AuthService,
		private router: Router
	) {}

	ngOnInit(): void {
		this.loadInfoData();
		const storedState = localStorage.getItem('primeraVezRegistrado');
		this.primeraVezRegistrado = storedState === 'true';
	}

	openDialog(): void {
		const dialogRef = this.dialog.open(InformacionEmpresaComponent, {
			width: '1000px'
		});

		dialogRef.afterClosed().subscribe((result) => {
			console.log(`Diálogo cerrado con resultado: ${result}`);
			this.loadInfoData();
			this.primeraVezRegistrado = true;
			localStorage.setItem('primeraVezRegistrado', String(this.primeraVezRegistrado));
		});
	}
	private loadInfoData(): void {
		this.configurationService.getInfo().subscribe(
			(data) => {
				this.infoData = data;
			},
			(error) => {
				console.error('Error al obtener la información', error);
			}
		);
	}
	actualizarDatos(infoId: number): void {
		const dialogRef = this.dialog.open(ActualizarInfoComponent, {
			width: '1000px',
			data: { infoId: infoId }
		});

		dialogRef.afterClosed().subscribe((result) => {
			console.log(`Diálogo cerrado con resultado: ${result}`);
			this.loadInfoData();
		});
	}
	logout(): void {
		this.authService.logout();
		this.router.navigate(['/login']);
	}
	isAdmin(): boolean {
		return this.authService.currentRole === 'admin';
	}
}
