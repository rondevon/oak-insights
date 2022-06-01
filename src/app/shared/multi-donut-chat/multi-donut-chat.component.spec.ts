import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiDonutChatComponent } from './multi-donut-chat.component';

describe('MultiDonutChatComponent', () => {
  let component: MultiDonutChatComponent;
  let fixture: ComponentFixture<MultiDonutChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiDonutChatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiDonutChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
