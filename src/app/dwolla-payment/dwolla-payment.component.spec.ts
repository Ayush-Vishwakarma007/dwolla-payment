import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwollaPaymentComponent } from './dwolla-payment.component';

describe('DwollaPaymentComponent', () => {
  let component: DwollaPaymentComponent;
  let fixture: ComponentFixture<DwollaPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DwollaPaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DwollaPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
