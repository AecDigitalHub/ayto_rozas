import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DPTComponent } from './dpt.component';

describe('DPTComponent', () => {
  let component: DPTComponent;
  let fixture: ComponentFixture<DPTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DPTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DPTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
