import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatStore } from './chat-store';

describe('ChatStore', () => {
  let component: ChatStore;
  let fixture: ComponentFixture<ChatStore>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatStore]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatStore);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
