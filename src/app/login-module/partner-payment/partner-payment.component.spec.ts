import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerPaymentComponent } from './partner-payment.component';

describe('PartnerPaymentComponent', () => {
  let component: PartnerPaymentComponent;
  let fixture: ComponentFixture<PartnerPaymentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartnerPaymentComponent]
    });
    fixture = TestBed.createComponent(PartnerPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
