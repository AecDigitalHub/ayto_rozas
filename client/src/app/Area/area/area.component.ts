import { Component, OnInit, Input } from '@angular/core';
import { Observable } from '../../../../node_modules/rxjs';
import { AreaService } from '../../../services/area.service';
import { ActivatedRoute } from '@angular/router';
import { Http, Response } from '@angular/http';
import { PhotoHeaderComponent } from '../../photo-header/photo-header.component';
import { PieChartComponent } from '../../Charts/pie-chart/pie-chart.component';
import { LinealChartComponent } from '../../Charts/lineal-chart/lineal-chart.component';
import { BubbleChartComponent } from '../../Charts/bubble-chart/bubble-chart.component';



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
  Colectivos: any;
  Grupos: any;
  SalaryDist: any;
  Vacantes: Number;
  KeysGruposDist: Array<string> = ['Grupo A: A1', 'Grupo B: A2', 'Grupo C: C1', 'Grupo D: C2', 'Grupo E'];
  KeysSalaryDist: Array<string> = ['15-20k', '20-35k', '35-50k', '> 50k'];

  constructor(public area: AreaService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      (this.Area = params['area']),
      this.area.getArea(this.Area).subscribe(Area => {
      this.AreaPositions = Area;

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
this.route.params.subscribe(params => {
  (this.Area = params['area']),
  this.area.getColectivos(this.Area).subscribe(Colectivos => {
    this.Colectivos = Colectivos;
  });
});
this.route.params.subscribe(params => {
  (this.Area = params['area']),
  this.area.getGruposDist(this.Area).subscribe(Grupos => {
    this.Grupos = Grupos;
  });
});
this.route.params.subscribe(params => {
  (this.Area = params['area']),
  this.area.getSalaryDist(this.Area).subscribe(SalaryDist => {
    this.SalaryDist = SalaryDist;
  });
});
}
}

