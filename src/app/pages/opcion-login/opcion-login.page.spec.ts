import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OpcionLoginPage } from './opcion-login.page';

describe('OpcionLoginPage', () => {
  let component: OpcionLoginPage;
  let fixture: ComponentFixture<OpcionLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpcionLoginPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OpcionLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
