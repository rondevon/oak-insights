import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsightItemTileComponent } from './insight-item-tile.component';

describe('InsightItemTileComponent', () => {
  let component: InsightItemTileComponent;
  let fixture: ComponentFixture<InsightItemTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsightItemTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsightItemTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
