import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarListComponentComponent } from './car-list-component.component';

describe('CarListComponentComponent', () => {
  let component: CarListComponentComponent;
  let fixture: ComponentFixture<CarListComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarListComponentComponent]
    });
    fixture = TestBed.createComponent(CarListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
