import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhaseDistributionComponent } from './phase-distribution.component';

describe('PhaseDistributionComponent', () => {
  let component: PhaseDistributionComponent;
  let fixture: ComponentFixture<PhaseDistributionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhaseDistributionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhaseDistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
