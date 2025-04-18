import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedCarComponent } from './approved-car.component';

describe('ApprovedCarComponent', () => {
  let component: ApprovedCarComponent;
  let fixture: ComponentFixture<ApprovedCarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApprovedCarComponent]
    });
    fixture = TestBed.createComponent(ApprovedCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
