import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductRegistrationService } from '@app-core/services/productos.service';

@Component({
	selector: 'app-register-product',
	templateUrl: './register-product.component.html',
	styleUrls: ['./register-product.component.scss']
})
export class RegisterProductComponent implements OnInit {
	productForm: FormGroup;
	productImage: File | null = null;

	constructor(private productService: ProductRegistrationService, private fb: FormBuilder) {}

	ngOnInit() {
		this.productForm = this.fb.group({
			productName: [null, Validators.required],
			productDescription: [null, Validators.required],
			productPrice: [null, [Validators.required, Validators.min(0)]],
			amountProduct: [null, [Validators.required, Validators.min(0)]]
		});
	}

	registerProduct() {
		if (this.productForm.valid) {
			const productData = new FormData();
			productData.append('productName', this.productForm.value.productName);
			productData.append('description', this.productForm.value.productDescription);
			productData.append('price', this.productForm.value.productPrice.toString());
			productData.append('amount', this.productForm.value.amountProduct.toString());

			if (this.productImage) {
				productData.append('image', this.productImage, this.productImage.name);
			}

			this.productService.registerProduct(productData).subscribe(
				(response) => {
					console.log('Producto registrado con éxito:', response);
				},
				(error) => {
					console.error('Error al registrar el producto:', error);
				}
			);
		} else {
			console.log('Formulario inválido. Por favor, complete todos los campos correctamente.');
		}
	}

	handleImageInput(event: any) {
		const file = event.target.files[0];
		this.productImage = file;
	}
}
