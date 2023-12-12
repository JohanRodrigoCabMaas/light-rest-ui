import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroCustomerComponent } from './registro-customer.component';

describe('RegistroCustomerComponent', () => {
  let component: RegistroCustomerComponent;
  let fixture: ComponentFixture<RegistroCustomerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroCustomerComponent]
    });
    fixture = TestBed.createComponent(RegistroCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
