import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { DashboardService } from '../../services/dashboard.service';
import { ExcelService } from '../../services/excel.service';
import { MatTabsModule } from '@angular/material/tabs';
import { Observable } from '../../../node_modules/rxjs';
import { TableExport } from '../../../node_modules/tableexport';


@Component({
  selector: 'app-rptcolectivos',
  templateUrl: './rptcolectivos.component.html',
  styleUrls: ['./rptcolectivos.component.css']
})
export class RPTColectivosComponent implements OnInit {
User: any;
colectivo: any;
RPTFuncionarios: Position [];
RPTLaborales: Position [];
RPT: any;
table: any;


  constructor(public dashboard: DashboardService, public Auth: AuthenticationService, private excelService: ExcelService) {}

  ngOnInit() {

this.dashboard.getRPTLaborales().subscribe(Laborales => {
  this.RPTLaborales = Laborales.positions;
});
this.dashboard.getRPTFuncionarios().subscribe(Funcionarios => {
  this.RPTFuncionarios = Funcionarios.positions;

  });
}
exportAsXLSXFuncionarios(data): void {
  this.excelService.exportAsExcelFile(data, 'sample');
}
exportAsXLSXLaborales(): void {
  this.excelService.exportAsExcelFile(this.RPTLaborales, 'sample');
}
tableToJson(table) {
  const data = []; // first row needs to be headers var headers = [];
  for (let i = 0; i < table.rows[0].cells.length; i++) {
  //  headers[i] = table.rows[0].cells[i].innerHTML.toLowerCase().replace(/ /gi, '');
  }
  for (let i = 1; i < table.rows.length; i++) {
  const tableRow = table.rows[i]; let rowData = {};
  for (let j = 0; j < tableRow.cells.length; j++) {
  rowData = tableRow.cells[j].innerHTML;
  } data.push(rowData);
  }
  return data;
  }
}
