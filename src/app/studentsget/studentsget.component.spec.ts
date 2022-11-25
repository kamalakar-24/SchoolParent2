import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsgetComponent } from './studentsget.component';

describe('StudentsgetComponent', () => {
  let component: StudentsgetComponent;
  let fixture: ComponentFixture<StudentsgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
