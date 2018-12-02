import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-employments-table',
  templateUrl: './employments-table.component.html',
  styleUrls: ['./employments-table.component.css']
})
export class EmploymentsTableComponent implements OnChanges {
@Input() JobsFuncionarios;
jobs = [];
searchText: any;


  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['JobsFuncionarios']) {
      this.jobs = this.JobsFuncionarios.EmpFuncionarios;
    }
  }

}
