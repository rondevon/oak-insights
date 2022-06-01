import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultisiteNewComponent } from './multisite-new.component';

describe('MultisiteNewComponent', () => {
  let component: MultisiteNewComponent;
  let fixture: ComponentFixture<MultisiteNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultisiteNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultisiteNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
