import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VPTComponent } from './vpt.component';

describe('VPTComponent', () => {
  let component: VPTComponent;
  let fixture: ComponentFixture<VPTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VPTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VPTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
