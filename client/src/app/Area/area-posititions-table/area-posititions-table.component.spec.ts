import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaPosititionsTableComponent } from './area-posititions-table.component';

describe('AreaPosititionsTableComponent', () => {
  let component: AreaPosititionsTableComponent;
  let fixture: ComponentFixture<AreaPosititionsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaPosititionsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaPosititionsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
