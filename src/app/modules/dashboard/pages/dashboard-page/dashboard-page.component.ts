import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app-core/services/auth/auth.service';
import { DashboardService } from '@app-core/services/dashboard.service';

@Component({
	selector: 'app-dashboard-page',
	templateUrl: './dashboard-page.component.html',
	styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {
	public lineChartData: any;
	public lineChartOptions: any;
	public lineChartType: any = 'line';

	constructor(private dashboard: DashboardService) {}

	ngOnInit(): void {
		this.initializeChartOptions();
		this.loadData();
	}

	initializeChartOptions(): void {
		this.lineChartOptions = {
			elements: {
				line: {
					tension: 0.5
				}
			},
			scales: {
				y: {
					position: 'left'
				},
				x: {
					display: false
				}
			}
		};
	}

	loadData(): void {
		this.dashboard.getDate().subscribe(
			(data: any[]) => {
				this.updateChartData(data);
			},
			(error) => {
				console.error('Error fetching data:', error);
			}
		);
	}

	updateChartData(data: any[]): void {
		if (data.length > 0) {
			this.lineChartData = {
				datasets: [
					{
						data: data.map((item) => item.totalSum),
						label: 'Ingresos Totales',
						backgroundColor: 'rgba(113,230,135,0.2)',
						borderColor: 'rgba(113,230,135,1)',
						pointBackgroundColor: 'rgba(77,83,96,1)',
						pointBorderColor: '#fff',
						pointRadius: 0,
						pointHoverBackgroundColor: '#fff',
						pointHoverBorderColor: 'rgba(77,83,96,1)',
						fill: 'origin'
					}
				],
				labels: data.map((item) => item.totalSum)
			};
		}
	}
	getLastGain(): string {
		if (this.lineChartData && this.lineChartData.datasets[0].data.length > 0) {
			const lastGain = this.lineChartData.datasets[0].data[this.lineChartData.datasets[0].data.length - 1];
			return `$${lastGain}`;
		} else {
			return 'N/A';
		}
	}
}
