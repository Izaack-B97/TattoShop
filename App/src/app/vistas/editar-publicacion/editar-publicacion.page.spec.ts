import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPublicacionPage } from './editar-publicacion.page';

describe('EditarPublicacionPage', () => {
  let component: EditarPublicacionPage;
  let fixture: ComponentFixture<EditarPublicacionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarPublicacionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarPublicacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
