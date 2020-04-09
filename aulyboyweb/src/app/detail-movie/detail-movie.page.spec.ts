import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailMoviePage } from './detail-movie.page';

describe('DetailMoviePage', () => {
  let component: DetailMoviePage;
  let fixture: ComponentFixture<DetailMoviePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailMoviePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailMoviePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
