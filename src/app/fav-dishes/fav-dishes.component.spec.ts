import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavDishesComponent } from './fav-dishes.component';

describe('FavDishesComponent', () => {
  let component: FavDishesComponent;
  let fixture: ComponentFixture<FavDishesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavDishesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavDishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
