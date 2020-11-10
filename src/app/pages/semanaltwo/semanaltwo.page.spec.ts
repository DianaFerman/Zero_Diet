import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SemanaltwoPage } from './semanaltwo.page';

describe('SemanaltwoPage', () => {
  let component: SemanaltwoPage;
  let fixture: ComponentFixture<SemanaltwoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemanaltwoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SemanaltwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
