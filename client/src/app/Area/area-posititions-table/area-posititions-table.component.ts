import { Component, OnInit, Input } from '@angular/core';
import { Observable } from '../../../../node_modules/rxjs';
import { AreaService } from '../../../services/area.service';
import { MatTableDataSource, MatInput } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ActivatedRoute } from '@angular/router';
import { Http, Response } from '@angular/http';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-area-posititions-table',
  templateUrl: './area-posititions-table.component.html',
  styleUrls: ['./area-posititions-table.component.css']
})
export class AreaPosititionsTableComponent implements OnInit {
Area: String;
AreaPositions: Observable<Array<object>>;
searchText: any;
CodigoDPT: any;
area: any;

constructor(public AreaPositionTable: AreaService, private route: ActivatedRoute, public snackBar: MatSnackBar) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
    (this.Area = params['area']),
    this.AreaPositionTable.getArea(this.Area).subscribe(Positions => {
    this.AreaPositions = Positions.positions;
    });
  });
}
openSnackBar(message: string, action: string) {
  this.snackBar.open(message, action, {
    duration: 2000,
  });
}
addDPT(area, CodigoDPT) {
  this.route.params.subscribe(params => {
   (this.Area = params['area']),
   console.log(this.Area);
    this.AreaPositionTable.addDPT((this.Area), CodigoDPT).subscribe(res => {
      if (res) {
        this.ngOnInit();
        this.openSnackBar('Nueva DPT creada', 'OK!');
      } else  {
        console.log('Hola');
        this.openSnackBar('CodigoDPT ya existe!', 'ERROR');
      }
    });
  });
}
}
