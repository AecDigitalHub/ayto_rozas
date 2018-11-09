import { Component, OnInit } from '@angular/core';
import { Observable } from '../../../../node_modules/rxjs';
import { Router, RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { PositionService } from '../../../services/position.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@Component({
  selector: 'app-rpt',
  templateUrl: './rpt.component.html',
  styleUrls: ['./rpt.component.css']
})
export class RPTComponent implements OnInit {
positionId: String;
position: Observable<any>;

constructor(public PositionRPTView: PositionService, private route: ActivatedRoute, private router: Router) { }

ngOnInit() {
  this.route.params.subscribe(params => {
    this.positionId = params['id'];
    console.log(this.positionId);
  });

  this.PositionRPTView.getPosition(this.positionId).subscribe(Position => {
    this.position = Position.position;
  console.log(this.position);
});
}
}
