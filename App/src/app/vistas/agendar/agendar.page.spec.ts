import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AgendarPage } from './agendar.page';

describe('AgendarPage', () => {
  let component: AgendarPage;
  let fixture: ComponentFixture<AgendarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgendarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AgendarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
