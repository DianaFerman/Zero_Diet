import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginDocPage } from './login-doc.page';

describe('LoginDocPage', () => {
  let component: LoginDocPage;
  let fixture: ComponentFixture<LoginDocPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginDocPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginDocPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
