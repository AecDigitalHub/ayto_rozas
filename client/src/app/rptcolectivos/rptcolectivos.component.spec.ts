import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RPTColectivosComponent } from './rptcolectivos.component';

describe('RPTColectivosComponent', () => {
  let component: RPTColectivosComponent;
  let fixture: ComponentFixture<RPTColectivosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RPTColectivosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RPTColectivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
