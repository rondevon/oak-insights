import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedAlertsComponent } from './shared-alerts.component';

describe('SharedAlertsComponent', () => {
  let component: SharedAlertsComponent;
  let fixture: ComponentFixture<SharedAlertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedAlertsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
