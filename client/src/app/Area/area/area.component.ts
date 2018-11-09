import { Component, OnInit, Input } from '@angular/core';
import { Observable } from '../../../../node_modules/rxjs';
import { AreaService } from '../../../services/area.service';
import { ActivatedRoute } from '@angular/router';
import { Http, Response } from '@angular/http';
import { PhotoHeaderComponent } from '../../photo-header/photo-header.component';




@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {
  Area: String;
  AreaPositions: Observable<Array<object>>;
  AreaDist: Observable<Array<number>>;
  PositionsCount: Number;
  EmployeesCount: Number;
  Colectivos: Object;
  Vacantes: Number;

  constructor(public area: AreaService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      (this.Area = params['area']),
      this.area.getArea(this.Area).subscribe(Area => {
      this.AreaPositions = Area;
      console.log(this.AreaPositions);
      this.PositionsCount = Area.positions.length;
    });
  });

  this.route.params.subscribe(params => {
    (this.Area = params['area']),
    this.area.getEmployeesCount(this.Area).subscribe(Employees => {
    this.EmployeesCount = Employees;
  });
});
this.route.params.subscribe(params => {
  (this.Area = params['area']),
  this.area.getVacancies(this.Area).subscribe(Vacantes => {
  this.Vacantes = Vacantes;
  });
});
// this.route.params.subscribe(params => {
//   (this.Area = params['area']),
//   this.area.getSalaryDist(this.Area).subscribe(SalaryDist => {
//   console.log(SalaryDist);
//   });
// });
}
}

