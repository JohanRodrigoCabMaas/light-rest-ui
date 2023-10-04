import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigutarionsPageComponent } from './configutarions-page.component';

describe('ConfigutarionsPageComponent', () => {
	let component: ConfigutarionsPageComponent;
	let fixture: ComponentFixture<ConfigutarionsPageComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [ConfigutarionsPageComponent]
		});
		fixture = TestBed.createComponent(ConfigutarionsPageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
