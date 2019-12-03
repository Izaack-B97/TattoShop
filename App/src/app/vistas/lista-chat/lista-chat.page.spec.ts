import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaChatPage } from './lista-chat.page';

describe('ListaChatPage', () => {
  let component: ListaChatPage;
  let fixture: ComponentFixture<ListaChatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaChatPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaChatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
