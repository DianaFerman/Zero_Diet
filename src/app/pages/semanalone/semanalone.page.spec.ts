import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SemanalonePage } from './semanalone.page';

describe('SemanalonePage', () => {
  let component: SemanalonePage;
  let fixture: ComponentFixture<SemanalonePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemanalonePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SemanalonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
