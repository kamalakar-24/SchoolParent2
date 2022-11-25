import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffcircularComponent } from './staffcircular.component';

describe('StaffcircularComponent', () => {
  let component: StaffcircularComponent;
  let fixture: ComponentFixture<StaffcircularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffcircularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffcircularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
