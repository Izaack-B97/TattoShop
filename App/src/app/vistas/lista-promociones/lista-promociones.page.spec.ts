import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPromocionesPage } from './lista-promociones.page';

describe('ListaPromocionesPage', () => {
  let component: ListaPromocionesPage;
  let fixture: ComponentFixture<ListaPromocionesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPromocionesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPromocionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
