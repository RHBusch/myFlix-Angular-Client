import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayGenreComponent } from './display-genre.component';

describe('DisplayGenreComponent', () => {
  let component: DisplayGenreComponent;
  let fixture: ComponentFixture<DisplayGenreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayGenreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
