import { Component, OnInit, Input } from '@angular/core';
import { Observable } from '../../../../node_modules/rxjs';
import { MatTableDataSource, MatInput } from '@angular/material';
import { Router, RouterModule } from '@angular/router';
import { AuthenticationService } from '../../../services/authentication.service';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { PositionService } from '../../../services/position.service';
import { VPTComponent  } from '../vpt/vpt.component';


@Component({
  selector: 'app-posicion',
  templateUrl: './posicion.component.html',
  styleUrls: ['./posicion.component.css']
})
export class PosicionComponent implements OnInit {
positionId: String;
position: Observable<any>;

  constructor(public PositionView: PositionService, private route: ActivatedRoute, private router: Router, public Auth: AuthenticationService) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.positionId = params['id'];
    });

    this.PositionView.getPosition(this.positionId).subscribe(Position => {
      this.position = Position;
      console.log(this.position);
    });
  }

}
