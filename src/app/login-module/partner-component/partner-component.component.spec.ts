import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerComponentComponent } from './partner-component.component';

describe('PartnerComponentComponent', () => {
  let component: PartnerComponentComponent;
  let fixture: ComponentFixture<PartnerComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartnerComponentComponent]
    });
    fixture = TestBed.createComponent(PartnerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
