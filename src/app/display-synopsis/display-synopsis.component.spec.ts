import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaySynopsisComponent } from './display-synopsis.component';

describe('DisplaySynopsisComponent', () => {
  let component: DisplaySynopsisComponent;
  let fixture: ComponentFixture<DisplaySynopsisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DisplaySynopsisComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaySynopsisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
