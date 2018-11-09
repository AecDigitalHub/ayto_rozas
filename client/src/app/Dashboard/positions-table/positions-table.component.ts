import { Component, OnInit, Input } from '@angular/core';
import { Observable } from '../../../../node_modules/rxjs';
import { DashboardService } from '../../../services/dashboard.service';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@Component({
  selector: 'app-positions-table',
  templateUrl: './positions-table.component.html',
  styleUrls: ['./positions-table.component.css']
})
export class PositionsTableComponent implements OnInit {
  positions: Position [];
  PositionsVacancies: any;

constructor(public PositionTable: DashboardService) {}

ngOnInit() {
  this.PositionTable.getPositions().subscribe(Positions => {
    console.log(Positions);
    this.positions = Positions.positions;
  });

}
}
