import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSiteComparisonComponent } from './multi-site-comparison.component';

describe('MultiSiteComparisonComponent', () => {
  let component: MultiSiteComparisonComponent;
  let fixture: ComponentFixture<MultiSiteComparisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiSiteComparisonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiSiteComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
