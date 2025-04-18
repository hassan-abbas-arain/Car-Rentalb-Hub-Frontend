import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrditCardComponent } from './crdit-card.component';

describe('CrditCardComponent', () => {
  let component: CrditCardComponent;
  let fixture: ComponentFixture<CrditCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrditCardComponent]
    });
    fixture = TestBed.createComponent(CrditCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
