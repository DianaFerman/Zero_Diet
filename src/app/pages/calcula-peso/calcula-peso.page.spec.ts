import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CalculaPesoPage } from './calcula-peso.page';

describe('CalculaPesoPage', () => {
  let component: CalculaPesoPage;
  let fixture: ComponentFixture<CalculaPesoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculaPesoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CalculaPesoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
