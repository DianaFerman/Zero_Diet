import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DietadiariaPage } from './dietadiaria.page';

describe('DietadiariaPage', () => {
  let component: DietadiariaPage;
  let fixture: ComponentFixture<DietadiariaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DietadiariaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DietadiariaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
