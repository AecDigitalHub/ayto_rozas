import { Component, OnInit } from '@angular/core';
import { Observable } from '../../../../node_modules/rxjs';
import { Router, RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { PositionService } from '../../../services/position.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NotificacionComponent } from '../../notificacion/notificacion.component';
import { PuestoService } from '../../../services/puesto.service';
import { Http, Response } from '@angular/http';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-rpt',
  templateUrl: './rpt.component.html',
  styleUrls: ['./rpt.component.css']
})
export class RPTComponent implements OnInit {
positionId: String;
position: Observable<any>;
newPuesto: any;
editedPuestos: any;
editedPosition: Observable<any>;

constructor(public snackBar: MatSnackBar, public PositionRPTView: PositionService, private route: ActivatedRoute, private router: Router, public Puestos: PuestoService) { }

ngOnInit() {
  this.route.params.subscribe(params => {
    this.positionId = params['id'];
    console.log(this.positionId);
  });

  this.PositionRPTView.getPosition(this.positionId).subscribe(position => {
    this.position = position.position;
  console.log(this.position);
});
}
addPuesto(Position, CodDPT, CodEmpleado, DenomPuesto, NombreEmpleado, Situacion) {
  this.Puestos.addPuesto(Position, CodDPT, CodEmpleado, DenomPuesto, NombreEmpleado, Situacion).subscribe(puesto => {
  this.newPuesto = puesto;
  console.log(this.newPuesto);
  this.ngOnInit();
});
}

removePuesto(id) {
  this.Puestos.removePuesto(id).subscribe(position => {
    console.log(position);
this.ngOnInit();
  });
}
openSnackBar(message: string, action: string) {
  this.snackBar.open(message, action, {
    duration: 1000,
  });
}
}
