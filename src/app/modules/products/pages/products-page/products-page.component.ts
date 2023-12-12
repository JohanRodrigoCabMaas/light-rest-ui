import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '@app-core/services/auth/auth.service';
import { CustomerService } from '@app-core/services/customer.service';
import { OrderService } from '@app-core/services/order.service';
import { ProductRegistrationService } from '@app-core/services/productos.service';
import { CustomerSelectionComponent } from 'app/components/customer-selection/customer-selection.component';
import { RegisterProductComponent } from 'app/components/register-product/register-product.component';

@Component({
	selector: 'app-products-page',
	templateUrl: './products-page.component.html',
	styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {
	products: any[] = [];
	selectedProducts: any[] = [];
	subtotal = 0;
	total = 0;
	customers: any[] = [];
	selectedCustomer: any;
	paymentComplete = false;

	constructor(
		public dialog: MatDialog,
		private productService: ProductRegistrationService,
		private orderService: OrderService,
		private customerService: CustomerService,
		public authService: AuthService
	) {}

	ngOnInit(): void {
		this.calculateTotal();
		this.getProducts();
		this.getCustomers();
	}

	openCustomerSelectionDialog(): void {
		const dialogRef = this.dialog.open(CustomerSelectionComponent, {
			width: '500px',
			data: { customers: this.customers }
		});

		dialogRef.afterClosed().subscribe((selectedCustomer) => {
			if (selectedCustomer) {
				console.log('Cliente seleccionado:', selectedCustomer);
				// Puedes asignar selectedCustomer a una propiedad y mostrarla en tu interfaz según sea necesario
				this.selectedCustomer = selectedCustomer;
			}
		});
	}
	getCustomers(): void {
		this.customerService.getCustomers().subscribe(
			(data) => {
				this.customers = data;
			},
			(error) => {
				console.error('Error al cargar clientes', error);
			}
		);
	}

	calculateTotal(): void {
		this.subtotal = 0;

		this.selectedProducts.forEach((product) => {
			this.subtotal += product.price * product.quantity;
		});

		this.total = this.subtotal;
	}

	openDialog(): void {
		const dialogRef = this.dialog.open(RegisterProductComponent, {
			width: '1000px'
		});

		dialogRef.afterClosed().subscribe((result) => {
			console.log(`Diálogo cerrado con resultado: ${result}`);
			this.getProducts();
		});
	}

	getProducts(): void {
		this.productService.getProducts().subscribe(
			(data) => {
				this.products = data;
			},
			(error) => {
				console.error('Error al cargar productos', error);
			}
		);
	}
	addProductToCart(product: any): void {
		const index = this.selectedProducts.findIndex((p) => p.id === product.id);

		if (index === -1) {
			this.selectedProducts.push({
				id: product.id,
				productName: product.productName,
				price: product.price,
				quantity: 1
			});
		} else {
			this.selectedProducts[index].quantity++;
		}

		this.calculateTotal();
	}

	getImageUrl(product: any): string {
		return `http://localhost:3000/${product.imagePath.replace('\\', '/')}`;
	}
	pay(): void {
		const orderData = {
			products: this.selectedProducts.map((product) => ({
				productId: product.id,
				productName: product.productName,
				quantity: product.quantity,
				productPrice: product.price
			})),
			subtotal: this.subtotal,
			total: this.total
		};

		this.orderService.createOrder(orderData).subscribe((orderResponse) => {
			console.log('Orden creada:', orderResponse);
			this.resetState();
		});
	}
	resetState(): void {
		this.selectedProducts = [];
		this.selectedCustomer = null;
		this.paymentComplete = false;
		this.subtotal = 0;
		this.total = 0;
	}
	isAdmin(): boolean {
		// Verificar si el usuario actual tiene el rol de "admin"
		return this.authService.currentRole === 'admin';
	}
}
