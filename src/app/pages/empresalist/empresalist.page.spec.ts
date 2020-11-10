import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EmpresalistPage } from './empresalist.page';

describe('EmpresalistPage', () => {
  let component: EmpresalistPage;
  let fixture: ComponentFixture<EmpresalistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpresalistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EmpresalistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
