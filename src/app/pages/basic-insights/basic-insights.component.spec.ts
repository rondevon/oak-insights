import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicInsightsComponent } from './basic-insights.component';

describe('BasicInsightsComponent', () => {
  let component: BasicInsightsComponent;
  let fixture: ComponentFixture<BasicInsightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicInsightsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicInsightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
