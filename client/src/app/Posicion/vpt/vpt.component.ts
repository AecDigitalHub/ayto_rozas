import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Observable } from '../../../../node_modules/rxjs';
import { Router, RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { PositionService } from '../../../services/position.service';
import {MatExpansionModule} from '@angular/material/expansion';



@Component({
  selector: 'app-vpt',
  templateUrl: './vpt.component.html',
  styleUrls: ['./vpt.component.css']
})
export class VPTComponent implements OnInit {
  positionId: String;
position: Observable<any>;

constructor(public PositionVPTView: PositionService, private route: ActivatedRoute, private router: Router) { }

ngOnInit() {
  this.route.params.subscribe(params => {
    this.positionId = params['id'];
    console.log(this.positionId);
  });

  this.PositionVPTView.getPosition(this.positionId).subscribe(Position => {
    this.position = Position;
  console.log(this.position);
});
}
}
