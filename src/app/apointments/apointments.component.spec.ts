import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApointmentsComponent } from './apointments.component';

describe('ApointmentsComponent', () => {
  let component: ApointmentsComponent;
  let fixture: ComponentFixture<ApointmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApointmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
