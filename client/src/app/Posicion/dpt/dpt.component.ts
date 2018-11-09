import { Component, OnInit, Input} from '@angular/core';
import { Observable } from '../../../../node_modules/rxjs';
import { Router, RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { PositionService } from '../../../services/position.service';
import { PosicionComponent } from '../posicion/posicion.component';
import { EditService } from '../../../services/edit.service';
import { Http, Response } from '@angular/http';


@Component({
  selector: 'app-dpt',
  templateUrl: './dpt.component.html',
  styleUrls: ['./dpt.component.css']
})
export class DPTComponent implements OnInit {
positionId: String;
position: Observable<any>;
editedCondiciones: any;
editedMision: any;

  constructor(public PositionDPTView: PositionService, private route: ActivatedRoute, private router: Router, public Edit: EditService) { }



ngOnInit() {
  this.route.params.subscribe(params => {
    this.positionId = params['id'];
  });

  this.PositionDPTView.getPosition(this.positionId).subscribe(Position => {
    this.position = Position.position;
  console.log(this.position);
});
}
editCondiciones(id, Dedicacion, Dificultad, Responsabilidad, Nocturnidad, Turnicidad, PeligrosidadPenosidad) {
this.Edit.editCondiciones(id, Dedicacion, Dificultad, Responsabilidad, Nocturnidad, Turnicidad, PeligrosidadPenosidad).subscribe(condiciones => {
  this.editedCondiciones = condiciones;
  this.PositionDPTView.getPosition(this.positionId).subscribe(Position => {
    this.position = Position.position;
});
});
}
editMision(id, Mision) {
  this.Edit.editMision(id, Mision).subscribe(mision => {
    this.editedMision = mision;
    this.PositionDPTView.getPosition(this.positionId).subscribe(Position => {
      this.position = Position.position;
  });
  });
  }
}
