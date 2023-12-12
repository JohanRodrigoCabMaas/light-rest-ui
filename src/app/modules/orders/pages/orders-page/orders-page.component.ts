import { Component, OnInit } from '@angular/core';
import { DashboardService } from '@app-core/services/dashboard.service';
import { OrderService } from '@app-core/services/order.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-orders-page',
	templateUrl: './orders-page.component.html',
	styleUrls: ['./orders-page.component.scss']
})
export class OrdersPageComponent implements OnInit {
	orders: any[] = [];
	public totalSum: number = 0;
	private orderSubscription: Subscription | undefined;
	private loadedOnce: boolean = false;

	constructor(private orderService: OrderService, private dashboardService: DashboardService) {}

	ngOnInit(): void {
		this.loadOrders();
	}
	loadOrders(): void {
		if (this.orderSubscription) {
			this.orderSubscription.unsubscribe();
		}

		this.orderSubscription = this.orderService.getOrders().subscribe(
			(orders) => {
				console.log('Órdenes:', orders);

				if (!this.loadedOnce) {
					this.orders = orders;
					this.sumaTotal();
					this.loadedOnce = true;
				}
			},
			(error) => {
				console.error('Error al cargar las órdenes', error);
			}
		);
	}

	sumaTotal() {
		this.totalSum = this.orders.reduce((sum, order) => sum + Number(order.total), 0);
		console.log(this.totalSum);

		this.dashboardService.saveDate({ totalSum: this.totalSum }).subscribe(
			(response) => {
				console.log('TotalSum guardado en la API:', response);
			},
			(error) => {
				console.error('Error al guardar TotalSum en la API:', error);
			}
		);
	}
}
