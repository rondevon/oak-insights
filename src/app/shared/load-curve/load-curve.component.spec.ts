import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadCurveComponent } from './load-curve.component';

describe('LoadCurveComponent', () => {
  let component: LoadCurveComponent;
  let fixture: ComponentFixture<LoadCurveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadCurveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadCurveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
