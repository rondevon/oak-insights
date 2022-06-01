import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiConsumptionCostComponent } from './multi-consumption-cost.component';

describe('MultiConsumptionCostComponent', () => {
  let component: MultiConsumptionCostComponent;
  let fixture: ComponentFixture<MultiConsumptionCostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiConsumptionCostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiConsumptionCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
