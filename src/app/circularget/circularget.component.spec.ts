import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CirculargetComponent } from './circularget.component';

describe('CirculargetComponent', () => {
  let component: CirculargetComponent;
  let fixture: ComponentFixture<CirculargetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CirculargetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CirculargetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
