import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreacionPage } from './creacion.page';

describe('CreacionPage', () => {
  let component: CreacionPage;
  let fixture: ComponentFixture<CreacionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreacionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
