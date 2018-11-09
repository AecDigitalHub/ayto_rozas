import { Component, OnInit, Input } from '@angular/core';
import { Observable } from '../../../../node_modules/rxjs';
import { AreaService } from '../../../services/area.service';
import { MatTableDataSource, MatInput } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ActivatedRoute } from '@angular/router';
import { Http, Response } from '@angular/http';


@Component({
  selector: 'app-area-posititions-table',
  templateUrl: './area-posititions-table.component.html',
  styleUrls: ['./area-posititions-table.component.css']
})
export class AreaPosititionsTableComponent implements OnInit {
Area: String;
AreaPositions: Observable<Array<object>>;
constructor(public AreaPositionTable: AreaService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      (this.Area = params['area']),
    this.AreaPositionTable.getArea(this.Area).subscribe(Positions => {
      console.log(Positions);
      this.AreaPositions = Positions.positions;
    });
  });
}
}
