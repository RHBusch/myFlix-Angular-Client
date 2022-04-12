import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDirectorComponent } from './display-director.component';

describe('DisplayDirectorComponent', () => {
  let component: DisplayDirectorComponent;
  let fixture: ComponentFixture<DisplayDirectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayDirectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayDirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
