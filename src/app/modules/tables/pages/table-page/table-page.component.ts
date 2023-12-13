import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '@app-core/services/auth/auth.service';
import { TableService } from '@app-core/services/table.service';
import { RegisterMesaComponent } from 'app/components/register-mesa/register-mesa.component';

@Component({
	selector: 'app-table-page',
	templateUrl: './table-page.component.html',
	styleUrls: ['./table-page.component.scss']
})
export class TablePageComponent implements OnInit {
	tables: any[] = [];
	selectedTable: any = [];
	filterType: string = 'all';

	constructor(public dialog: MatDialog, private tableService: TableService, public authService: AuthService) {}

	ngOnInit(): void {
		this.loadTables();
	}

	loadTables(): void {
		this.tableService.getAllTables().subscribe(
			(tables) => {
				if (this.filterType !== 'all') {
					tables = tables.filter((table) => table.color === this.getColorForFilterType(this.filterType));
				}
				this.tables = tables;
			},
			(error) => {
				console.error('Error al cargar las mesas:', error);
			}
		);
	}

	openDialog(): void {
		const dialogRef = this.dialog.open(RegisterMesaComponent, {
			width: '1000px'
		});

		dialogRef.afterClosed().subscribe((result) => {
			console.log(`Diálogo cerrado con resultado: ${result}`);
			this.loadTables();
		});
	}
	getTableImage(table: any): string {
		if (table.numberOfChairs === '1-2' && table.type === 'cuadrangular') {
			return '/assets/img/mesa2.png';
		} else if (table.numberOfChairs === '1-2' && table.type === 'circular') {
			return '/assets/img/mesa2circular.png';
		} else if (table.numberOfChairs == '2-4' && table.type === 'cuadrangular') {
			return '/assets/img/mesa1.png';
		} else if (table.numberOfChairs == '2-4' && table.type == 'circular') {
			return '/assets/img/mesa1circular.png';
		} else if (table.numberOfChairs == '6' && table.type == 'cuadrangular') {
			return '/assets/img/mesa3.png';
		} else {
			return '/assets/img/mesa3circular.png';
		}
	}
	selectTable(table: any): void {
		this.selectedTable = table;
	}
	reserveTable(): void {
		const defaultColor = '#FF7484';
		if (this.selectedTable) {
			this.selectedTable.color = defaultColor;

			this.tableService.updateTable(this.selectedTable.id, { color: defaultColor }).subscribe(
				(response) => {
					console.log('Mesa reservada y color actualizado con éxito:', response);
					this.loadTables();
				},
				(error) => {
					console.error('Error al reservar la mesa y actualizar el color:', error);
				}
			);
		}
	}
	applyFilter(filterType: string): void {
		this.filterType = filterType;
		this.loadTables();
	}
	getColorForFilterType(filterType: string): string {
		switch (filterType) {
			case 'Unoccupied':
				return '#71E687';
			case 'Occupied':
				return '#FF7484';
			default:
				return '';
		}
	}
	isAdmin(): boolean {
		return this.authService.currentRole === 'admin';
	}
}
