import { Component, OnInit } from '@angular/core';
import { Observable } from '../../../../node_modules/rxjs';
import { CardsComponent } from '../cards/cards.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { DashboardService } from '../../../services/dashboard.service';
import { PieChartComponent } from '../../Charts/pie-chart/pie-chart.component';
import { LinealChartComponent } from '../../Charts/lineal-chart/lineal-chart.component';
import { PositionsTableComponent } from '../positions-table/positions-table.component';
import { EmploymentsTableComponent } from '../employments-table/employments-table.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  Positions: Observable<Array<object>>;
  PositionsCount: Number;
  PositionsVacancies: any;
  EmployeesCount: Observable<Number>;
  JobsCount: Observable<number>;
  Funcionarios;
  Laborales;
  Vacantes: Number;
  AvgArea;
  SalaryDist: any;
  KeysSalaryDist: Array<string> = ['15-20k', '20-35k', '35-50k', '> 50k'];

  constructor(public dashboard: DashboardService) {}

  ngOnInit() {
    this.dashboard.getPositions().subscribe(Positions => {
      this.Positions = Positions;
      this.PositionsCount = Positions.positions.length;
      console.log(this.PositionsCount);
    });
    this.dashboard.getColectivos().subscribe(Colectivos => {
      this.Funcionarios = Colectivos.funcionarios;
      this.Laborales = Colectivos.laborales;
      console.log(this.Funcionarios, this.Laborales);
    });
    // this.dashboard.getEmployeesColectivos().subscribe(jobs => {
    //   this.JobsFuncionarios = jobs[0];
    //   this.JobsLaborales = jobs[1];
    //   console.log(this.JobsFuncionarios, this.JobsLaborales);

      this.dashboard.getEmployeesCount().subscribe(Employees => {
        this.EmployeesCount = Employees;
      });

      this.dashboard.getVacancy().subscribe(Vacantes => {
      this.Vacantes = Vacantes;
      console.log('Vacantes =', this.Vacantes);
    });
    this.dashboard.getAvgEmployees().subscribe(Avg => {
      this.AvgArea = Avg.toFixed(2);
    });
    this.dashboard.getSalaryDist().subscribe(SalaryDist => {
      this.SalaryDist = SalaryDist;
    console.log(this.SalaryDist);
    });
  }
}
