import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UistandardPage } from './uistandard.page';

describe('UistandardPage', () => {
  let component: UistandardPage;
  let fixture: ComponentFixture<UistandardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UistandardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UistandardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
