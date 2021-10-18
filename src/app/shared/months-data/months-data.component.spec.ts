import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthsDataComponent } from './months-data.component';

describe('MonthsDataComponent', () => {
  let component: MonthsDataComponent;
  let fixture: ComponentFixture<MonthsDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthsDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
