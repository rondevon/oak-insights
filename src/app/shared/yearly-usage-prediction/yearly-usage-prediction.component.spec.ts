import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearlyUsagePredictionComponent } from './yearly-usage-prediction.component';

describe('YearlyUsagePredictionComponent', () => {
  let component: YearlyUsagePredictionComponent;
  let fixture: ComponentFixture<YearlyUsagePredictionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YearlyUsagePredictionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YearlyUsagePredictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
