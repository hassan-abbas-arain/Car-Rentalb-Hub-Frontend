import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempCarListComponent } from './temp-car-list.component';

describe('TempCarListComponent', () => {
  let component: TempCarListComponent;
  let fixture: ComponentFixture<TempCarListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TempCarListComponent]
    });
    fixture = TestBed.createComponent(TempCarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
