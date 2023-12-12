import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterMesaComponent } from './register-mesa.component';

describe('RegisterMesaComponent', () => {
	let component: RegisterMesaComponent;
	let fixture: ComponentFixture<RegisterMesaComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [RegisterMesaComponent]
		});
		fixture = TestBed.createComponent(RegisterMesaComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
