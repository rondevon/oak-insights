import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplianceComparisonComponent } from './appliance-comparison.component';

describe('ApplianceComparisonComponent', () => {
  let component: ApplianceComparisonComponent;
  let fixture: ComponentFixture<ApplianceComparisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplianceComparisonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplianceComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
