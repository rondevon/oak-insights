import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationChartComponent } from './notification-chart.component';

describe('NotificationChartComponent', () => {
  let component: NotificationChartComponent;
  let fixture: ComponentFixture<NotificationChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
