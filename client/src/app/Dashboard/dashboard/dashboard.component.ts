import { Component, OnInit } from '@angular/core';
import { Observable } from '../../../../node_modules/rxjs';
import { CardsComponent } from '../cards/cards.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { DashboardService } from '../../../services/dashboard.service';
import { PieChartComponent } from '../../Charts/pie-chart/pie-chart.component';
import { LinealChartComponent } from '../../Charts/lineal-chart/lineal-chart.component';
import { PositionsTableComponent } from '../positions-table/positions-table.component';
import { AuthenticationService } from '../../../services/authentication.service';
import { EmploymentsTableComponent } from '../employments-table/employments-table.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  User: any;
  Positions: Observable<Array<object>>;
  PositionsCount: Number;
  PositionsVacancies: any;
  EmployeesCount: any;
  JobsCount: Observable<number>;
  Funcionarios;
  Laborales;
  Vacantes: Number;
  AvgArea;
  SalaryDist: any;
  SalaryCount: any;
  SalaryAvg: any;
  KeysSalaryDist: Array<string> = ['15-20k', '20-35k', '35-50k', '> 50k'];
  Colectivos: any;


  constructor(public dashboard: DashboardService, public Auth: AuthenticationService) {}

  ngOnInit() {
    this.dashboard.getPositions().subscribe(Positions => {
      this.Positions = Positions;
      this.PositionsCount = Positions.positions.length;
      console.log(this.Positions);
    });
    this.dashboard.getColectivos().subscribe(Colectivos => {
      this.Funcionarios = Colectivos.funcionarios;
      this.Laborales = Colectivos.laborales;
    });
    this.dashboard.getColectivos().subscribe(Colectivos => {
      this.Colectivos = Colectivos;
    });

      this.dashboard.getEmployeesCount().subscribe(Puestos => {
        this.EmployeesCount = Number(Puestos);
      });

      this.dashboard.getVacancy().subscribe(Vacantes => {
      this.Vacantes = Vacantes;
    });
    this.dashboard.getAvgEmployees().subscribe(Avg => {
      this.AvgArea = Avg.toFixed(2);
    });
    this.dashboard.getSalaryDist().subscribe(SalaryDist => {
      this.SalaryDist = SalaryDist;
    });
    this.dashboard.getSalaryCount().subscribe(SalaryCount => {
      this.SalaryCount = SalaryCount;
      this.SalaryAvg = (SalaryCount / this.EmployeesCount).toFixed(2);
    });
  }
}
