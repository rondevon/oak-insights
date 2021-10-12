import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleNewsComponent } from './google-news.component';

describe('GoogleNewsComponent', () => {
  let component: GoogleNewsComponent;
  let fixture: ComponentFixture<GoogleNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogleNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
