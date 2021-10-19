import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhaseApplianceComponent } from './phase-appliance.component';

describe('PhaseApplianceComponent', () => {
  let component: PhaseApplianceComponent;
  let fixture: ComponentFixture<PhaseApplianceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhaseApplianceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhaseApplianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
