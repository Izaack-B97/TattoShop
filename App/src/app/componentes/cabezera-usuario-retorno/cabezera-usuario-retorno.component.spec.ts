import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabezeraUsuarioRetornoComponent } from './cabezera-usuario-retorno.component';

describe('CabezeraUsuarioRetornoComponent', () => {
  let component: CabezeraUsuarioRetornoComponent;
  let fixture: ComponentFixture<CabezeraUsuarioRetornoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabezeraUsuarioRetornoComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabezeraUsuarioRetornoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
