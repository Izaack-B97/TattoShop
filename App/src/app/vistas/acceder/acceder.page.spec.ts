import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AccederPage } from './acceder.page';

describe('AccederPage', () => {
  let component: AccederPage;
  let fixture: ComponentFixture<AccederPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccederPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AccederPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
