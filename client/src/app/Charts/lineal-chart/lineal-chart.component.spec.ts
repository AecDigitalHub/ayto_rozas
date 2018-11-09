import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinealChartComponent } from './lineal-chart.component';

describe('LinealChartComponent', () => {
  let component: LinealChartComponent;
  let fixture: ComponentFixture<LinealChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinealChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinealChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
