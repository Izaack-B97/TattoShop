import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccederPage } from './acceder.page';

describe('AccederPage', () => {
  let component: AccederPage;
  let fixture: ComponentFixture<AccederPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccederPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccederPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
