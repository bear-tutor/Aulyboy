import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AulyboyComponent } from './aulyboy.component';

describe('AulyboyComponent', () => {
  let component: AulyboyComponent;
  let fixture: ComponentFixture<AulyboyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AulyboyComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AulyboyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
