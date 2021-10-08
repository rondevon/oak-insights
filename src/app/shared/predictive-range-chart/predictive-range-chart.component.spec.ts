import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictiveRangeChartComponent } from './predictive-range-chart.component';

describe('PredictiveRangeChartComponent', () => {
  let component: PredictiveRangeChartComponent;
  let fixture: ComponentFixture<PredictiveRangeChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredictiveRangeChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PredictiveRangeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
