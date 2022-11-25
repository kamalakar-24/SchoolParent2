import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetcircularComponent } from './getcircular.component';

describe('GetcircularComponent', () => {
  let component: GetcircularComponent;
  let fixture: ComponentFixture<GetcircularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetcircularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetcircularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
