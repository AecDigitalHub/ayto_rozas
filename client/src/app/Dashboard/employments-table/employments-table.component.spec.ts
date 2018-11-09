import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploymentsTableComponent } from './employments-table.component';

describe('EmploymentsTableComponent', () => {
  let component: EmploymentsTableComponent;
  let fixture: ComponentFixture<EmploymentsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmploymentsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmploymentsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
