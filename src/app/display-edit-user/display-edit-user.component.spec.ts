import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayEditUserComponent } from './display-edit-user.component';

describe('DisplayEditUserComponent', () => {
  let component: DisplayEditUserComponent;
  let fixture: ComponentFixture<DisplayEditUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayEditUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayEditUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
